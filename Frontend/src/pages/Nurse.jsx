import React,{useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField  } from "@mui/material"
import {NavLink} from "react-router-dom"

export default function Nurse() {

    const getPatientdata = () => {
        fetch("http://localhost:3000/nursesData")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    // const [count,setCount]=useState(0)
    let count=0
    const [nameError,setNameError] = useState("")
    const [phoneError,setPhoneError] = useState("")
    const [mailError,setMailError] = useState("")
    
    const [formValues,setFormValues]=useState({name:"",phone:"",mail:""})

    const [name,setName] = useState("")
    const nameChange = (e) => {
        setName(e.target.value)
        console.log(name)
        setFormValues({...formValues,"name":e.target.value})
    }

    const [phone,setPhone] = useState("")
    const phoneChange = (e) => {
        setPhone(e.target.value)
        console.log(phone)
        setFormValues({...formValues,"phone":e.target.value})
    }
    
    const [mail,setMail] = useState("")
    const mailChange = (e) => {
        setMail(e.target.value)
        console.log(mail)
        setFormValues({...formValues,"mail":e.target.value})
    }
    count=0
    const [validated,setValidated]=useState(false)
    const handleSubmit = () => {
        // curr=0
        count=0
        let temp=Number(formValues.phone)
        // setCount(0   )
        if (!formValues.name || !formValues.name.length) {
            setNameError("Name is required")
        }
        else{
            setNameError("")
            count++
        }
        if (!formValues.phone || !formValues.phone.length ) {
            setPhoneError("Phone Number is required")
        }
        else if(formValues.phone.length<10 || formValues.phone.length>10 || Number.isNaN(temp)){
            setPhoneError("Invalid Phone Number")
        } 
        else{
            setPhoneError("")
            count++
        }
        if (!formValues.mail || !formValues.mail.length) {
            setMailError("Email is required")
            return false
        }
        else{
            count++
            setMailError("")
            setCount(count)
            let curr=count.toString()
            localStorage.setItem("count",curr)
        }
        if (count===3){
            setValidated(true)
            console.log("validated")
        }
    }

  return (
    <div >
            <FormGroup sx={{m:"auto",width:"500px"}}>
                    <TextField variant="outlined" label="Name..." name="name" defaultValue="" placeholder="Name..." onChange={nameChange} sx={{my:"20px",mt:"40px"}}
                        error={nameError && nameError.length ? true : false}
                        helperText={nameError}
                    />

                    <TextField variant="outlined" label="Phone No..." name="phone" placeholder="Phone no..." onChange={phoneChange} sx={{my:"20px"}}
                        error={phoneError && phoneError.length ? true : false}
                        helperText={phoneError}
                    />
                    
                    <TextField variant="outlined" label="Email..." name="email" placeholder="Email..." onChange={mailChange} sx={{my:"20px"}}
                        error={mailError && mailError.length ? true : false}
                        helperText={mailError}
                    />
                    
                    <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                        <Button onClick={handleSubmit} variant="contained" sx={{width:"fit-content",fontSize:"20px",height:"fit-content"}}>
                            Save
                        </Button>
                            <NavLink to={{pathname :"/takeSurvey"}}>
                                <Button variant="contained" sx={{width:"fit-content",fontSize:"20px",mb:""}}>
                                            Submit
                                </Button>
                            </NavLink>
                        <Button variant="contained" onClick={getPatientdata}>
                            <Card />
                        </Button>
                    </Box>
                </FormGroup>
    </div>
  );
}
