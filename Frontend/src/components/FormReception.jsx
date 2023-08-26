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
<<<<<<< HEAD
    
        <div className="flex h-[70vh] w-[100vw] bg-blue-200">
            <div className="h-[50vh] mx-[30vh] my-[30vh] w-[100vw] bg-blue-500">   
                <div className="ml-[11vh]">
            <img src="https://doodleipsum.com/700/avatar-4?i=2048c47c8c7d48e9c5635229c0974ca8" className="h-[15vh]"/>
        </div>
                <Box sx={{display:"flex",w:"100%",height:"60%", gap:'1px'}}>
                    <FormGroup sx={{m:"100px"}}>
                        <TextField
                            id="outlined-basic"
                            label="Abha Number"
                            variant="outlined"
                            sx={{width:"300px","background-color":"white"}}
                            onChange={changeAbhaNumber}
                            error={abhaError && abhaError.length ? true : false}
                            helperText={abhaError}
                        />
                    </FormGroup>
                    <div className="mt-[18vh] -ml-12">
                    <Button onClick={cityFetch} sx={{"background-color":"white"}}>
                        Submit
                    </Button>
                    </div>
                    
                </Box>
                
            </div>
            
            {/* <div className="ml-[50vh]">
                <img src={registration} className="h-[90vh] w-[80vh]"/> 
            </div> */}
        </div>
        
    

=======
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
>>>>>>> 35eddc1f3377a6f3a7f42f16dbd54759cfe60f0b
    )
}