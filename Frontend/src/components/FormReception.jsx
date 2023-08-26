import { Box,FormGroup,TextField,Button } from "@mui/material";
import { useState } from "react";

export default function FormReception(){

    const [formValues,setFormValues]=useState({abhaNumber:""})
    const [abhaError,setAbhaError] = useState("")
    const [abhaNumber,setAbhaNumber] = useState()
    const changeAbhaNumber = (e) => {
        setAbhaNumber(e.target.value)
        console.log(e.target.value)
        setFormValues({...formValues,"abhaNumber":e.target.value})
    }
    const validateAbhaNumber = () => {
        if (!formValues.abhaNumber || !formValues.abhaNumber.length ) {
            setAbhaError("Abha Number is required")
        }
        else if(formValues.abhaNumber.length<12 || Number.isNaN(abhaNumber)){
            setAbhaError("Invalid ABHA Number")
        }
        else{
            setAbhaError("")
            // const input = JSON.stringify({"abhaNumber":formValues.abhaNumber})
            console.log(abhaNumber)
            console.log("working")

            const cityFetch=async ()=>{
            fetch("http://localhost:3000/reception/uploadAbha",{
                method:"POST"   ,
                headers:{
                    'Content-Type':"application/json"
                },
                    body:{"abhaNumber":abhaNumber}
                })
                .then(res=>res.json())
                .then(res=>res["output"])
            console.log(backendData[0]) 
            }
        }
    }
    return (
        <Box sx={{display:"flex",w:"100%",justifyContent:"center",alignItems:'center',height:"100%"}}>
            <FormGroup sx={{}}>
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