import { Box,FormGroup,TextField,Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
// import registration from '../assets/images/registration.png'

export default function FormReception(){

    const [formValues,setFormValues]=useState({abhaNumber:""})
    const [abhaError,setAbhaError] = useState("")
    const [abhaNumber,setAbhaNumber] = useState()
    const [countPatient,setCountPatient] = useState(1)
    const [patientQueue,setPatientQueue] = useState([])
    let curr=0
    const changeAbhaNumber = (e) => {
        setAbhaNumber(e.target.value)
        console.log(e.target.value)
        setFormValues({...formValues,"abhaNumber":e.target.value})
    }
    const validateAbhaNumber = () => {
        curr=countPatient+1
        if (!formValues.abhaNumber || !formValues.abhaNumber.length ) {
            setAbhaError("Abha Number is required")
        }
        else if(formValues.abhaNumber.length<12 || Number.isNaN(abhaNumber)){
            setAbhaError("Invalid ABHA Number")
        }
        else{
            setAbhaError("")
            setCountPatient(countPatient+1)
            setPatientQueue([...patientQueue,Number(abhaNumber)])
            setPatientQueue([...patientQueue,Number(abhaNumber)])
            
            console.log("working")
            setTimeout(() => {
                cityFetch()
            }, 1000);

        }
    }
    const cityFetch=async ()=>{
        console.log(countPatient)
        localStorage.setItem("count",countPatient)
          
          const stringifiedPatientQueue =
            JSON.stringify(patientQueue)
            
          localStorage.setItem(
            "patientQueue",
            stringifiedPatientQueue
          )

        console.log("working")
        setAbhaNumber(Number(abhaNumber))
        axios
        .post(`http://localhost:3000/reception/uploadAbha`, {
            abhaNumber:abhaNumber
        })
        .then(function (res) {
            console.log(res);
            
        })
        .catch(function (err) {
            console.log(err);
        });
    }
    return (
        <Box sx={{display:"flex",w:"100%",justifyContent:"center",alignItems:'center',height:"100%"}}>
            <FormGroup sx={{m:"200px"}}>
                <TextField
                    id="outlined-basic"
                    label="Abha Number"
                    variant="outlined"
                    sx={{width:"300px"}}
                    onChange={changeAbhaNumber}
                    error={abhaError && abhaError.length ? true : false}
                    helperText={abhaError}
                />
            </FormGroup>
            <Button onClick={validateAbhaNumber}>
                Submit
            </Button>
        </Box>
    )
}