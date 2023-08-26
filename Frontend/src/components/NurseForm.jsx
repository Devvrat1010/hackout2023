import React,{useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField  } from "@mui/material"
import {NavLink} from "react-router-dom"


export default function NurseForm(){
    
    const getPatientdata =async () => {
        await fetch("http://localhost:3000/nursesData")
       .then((response) => response.json())
       .then((data) => console.log(data));
   }    
    let count=0
    const [nameError,setNameError] = useState("")
    const [phoneError,setPhoneError] = useState("")
    const [mailError,setMailError] = useState("")
    
    const [formValues,setFormValues]=useState({name:"",phone:"",mail:""})

    const [abha,setAbha] = useState("")
    const abhaChange = (e) => {
        setAbha(e.target.value)
        console.log(name)
        setFormValues({...formValues,"name":e.target.value})
    }

    const [symptoms,setSymptoms] = useState("")
    const symptomsChange = (e) => {
        setSymptoms(e.target.value)
        console.log()
        setFormValues({...formValues,"symptoms":e.target.value})
    }

    const [vital,setVitals] = useState("")
    const vitalsChange = (e) => {
        setVitals(e.target.value)
        console.log()
        setFormValues({...formValues,"vitals":e.target.value})
    }
    
    const [age,setAge] = useState()
    const ageChange = (e) => {
        setAge(e.target.value)
        console.log()
        setFormValues({...formValues,"age":e.target.value})
    }
    
    const [bloodPressure,setBloodPressure] = useState("")
    const bloodPressureChange = (e) => {
        setBloodPressure(e.target.value)
        console.log()
        setFormValues({...formValues,"blood_pressure":e.target.value})
    }
    
    const [height,setHeight] = useState("")
    const heightChange = (e) => {
        setHeight(e.target.value)
        console.log()
        setFormValues({...formValues,"height":e.target.value})
    }
    
    const [weight,setWeight] = useState("")
    const weightChange = (e) => {
        setWeight(e.target.value)
        console.log()
        setFormValues({...formValues,"weight":e.target.value})
    }

  
    count=0
    const [validated,setValidated]=useState(false)
    const handleSubmit = () => {
        console.log(formValues)
    }

    return(
        <Box>
                        <FormGroup sx={{m:"auto",width:"500px"}}>
                    <TextField variant="outlined" label="Name..." name="name" defaultValue="" placeholder="ABHA..." onChange={abhaChange} sx={{my:"20px",mt:"40px"}}
                        // error={nameError && nameError.length ? true : false}
                        // helperText={nameError}
                    />
                    <TextField variant="outlined" label="Symptoms..." name="symptoms" defaultValue="" placeholder="Symptoms..." onChange={symptomsChange} sx={{my:"20px"}}
                        // error={phoneError && phoneError.length ? true : false}
                        // helperText={phoneError}
                    />
                    <TextField variant="outlined" label="Vitals..." name="vitals" defaultValue="" placeholder="Vitals..." onChange={vitalsChange} sx={{my:"20px"}}
                        // error={mailError && mailError.length ? true : false}
                        // helperText={mailError}
                    />
                    <TextField variant="outlined" label="Age..." name="age" defaultValue="" placeholder="Age..." onChange={ageChange} sx={{my:"20px"}}  
                        // error={mailError && mailError.length ? true : false}
                        // helperText={mailError}
                    />
                    <TextField variant="outlined" label="Blood Pressure..." name="blood_pressure" defaultValue="" placeholder="Blood Pressure..." onChange={bloodPressureChange} sx={{my:"20px"}}
                        // error={mailError && mailError.length ? true : false}
                        // helperText={mailError}
                    />
                    <TextField variant="outlined" label="Height..." name="height" defaultValue="" placeholder="Height..." onChange={heightChange} sx={{my:"20px"}}
                        // error={mailError && mailError.length ? true : false}
                        // helperText={mailError}
                    />
                    <TextField variant="outlined" label="Weight..." name="weight" defaultValue="" placeholder="Weight..." onChange={weightChange} sx={{my:"20px"}}
                        // error={mailError && mailError.length ? true : false}
                        // helperText={mailError}
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
        </Box>
    )
}