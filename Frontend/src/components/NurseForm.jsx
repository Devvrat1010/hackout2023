import React,{useEffect, useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField  } from "@mui/material"
import {NavLink} from "react-router-dom"
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";


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
    
    const [formValues,setFormValues]=useState({abha:"",symptoms:"",vitals:"",age:"",blood_pressure:"",height:"",weight:""})

    const [abha,setAbha] = useState()
    const abhaChange = (e) => {
        setAbha(e.target.value)
        setFormValues({...formValues,"abha":e.target.value})
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
    // const [validated,setValidated]=useState(false)
    const handleSubmit = () => {
        console.log("working")
        console.log(formValues)
        // let nurseData=formValues
        // setAbhaNumber(Number(abhaNumber))
        axios
        .post(`http://localhost:3000/nurseData`, {
            query:formValues
        })
        .then(function (res) {
            console.log(res);
            
        })
        .catch(function (err) {
            console.log(err);
        });
    }
    const patientQueue=JSON.parse(localStorage.getItem("patientQueue"))

    const columns=[
        {field:"id",headerName:"ID",width:300},
        ]
        const [currPatients,setCurrPatients]=useState([])
    const fetchingPatients=async (patients)=>{
        console.log("PatientsQueue")
        console.log(patientQueue)

        // patientQueue.map((item)=>{
        fetch(`http://localhost:3000/patients/getOne/?abha_number=`+patients)
        .then((response) => response.json())
        .then(res=>(
                setCurrPatients([...currPatients,res[0]])
        ))
        // .then((data) => console.log(data));
        // })



    }
    useEffect(()=>{
        for (let i = 0; i < patientQueue.length; i++) {
            // const element = patientQueue[i];
            // fetch(`http://localhost:3000/patients/getOne/?abha_number=${element}`)
            // .then((response) => response.json())
            // .then(res=>(
                //         setCurrPatients([...currPatients,res[0]])
                // ))
                console.log(typeof(patientQueue[i]))
                console.log("hehe")
                fetchingPatients(patientQueue[i])
            }
        console.log("currPatients")
        console.log(currPatients)
        },[])

    return(
        <Box>
            <FormGroup sx={{ml:"200px",width:"100%", display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
                
                <TextField variant="outlined" label="ABHA..." name="abhaNumber" defaultValue="" placeholder="ABHA..." onChange={abhaChange} sx={{my:"20px",mt:"40px",width:"300px"}}
                    // error={nameError && nameError.length ? true : false}
                    // helperText={nameError}
                />
                <TextField variant="outlined" label="Symptoms..." name="symptoms" defaultValue="" placeholder="Symptoms..." onChange={symptomsChange} sx={{my:"20px",mt:"40px",width:"300px"}}
                    // error={phoneError && phoneError.length ? true : false}
                    // helperText={phoneError}
                />
                <TextField variant="outlined" label="Vitals..." name="vitals" defaultValue="" placeholder="Vitals..." onChange={vitalsChange} sx={{my:"20px",mt:"40px",width:"300px"}}
                    // error={mailError && mailError.length ? true : false}
                    // helperText={mailError}
                />
                <TextField variant="outlined" label="Age..." name="age" defaultValue="" placeholder="Age..." onChange={ageChange} sx={{my:"20px",mt:"40px",width:"300px"}}  
                    // error={mailError && mailError.length ? true : false}
                    // helperText={mailError}
                />
                <TextField variant="outlined" label="Blood Pressure..." name="blood_pressure" defaultValue="" placeholder="Blood Pressure..." onChange={bloodPressureChange} sx={{my:"20px",mt:"40px",width:"300px"}}
                    // error={mailError && mailError.length ? true : false}
                    // helperText={mailError}
                />
                <TextField variant="outlined" label="Height..." name="height" defaultValue="" placeholder="Height..." onChange={heightChange} sx={{my:"20px",mt:"40px",width:"300px"}}
                    // error={mailError && mailError.length ? true : false}
                    // helperText={mailError}
                />
                <TextField variant="outlined" label="Weight..." name="weight" defaultValue="" placeholder="Weight..." onChange={weightChange} sx={{my:"20px",mt:"40px",width:"300px"}}
                    // error={mailError && mailError.length ? true : false}
                    // helperText={mailError}
                />



                
            </FormGroup>
            <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <Button onClick={fetchingPatients} variant="contained" sx={{width:"fit-content",fontSize:"20px",height:"fit-content"}}>
                    Save
                </Button>

                <Button variant="contained" onClick={getPatientdata}>
                    <Card />
                </Button>

            </Box>
            {/* <DataGrid
                columns={columns}
                rows={rows}
                getRowHeight={() => 'auto'}
            /> */}

        </Box>
    )
}