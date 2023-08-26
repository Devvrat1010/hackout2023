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
    const [currPatientData,setCurrPatientData]=useState([])

    // const getCurrPatientdata=async ()=>{
    //     console.log("patientQueue in func")
    //     console.log(patientQueue)
    //     await fetch(`http://localhost:3000/patients/selected/?queue=`+patientQueue)
    //     .then((response) => response.json())
    //     .then((data) => 
    //         console.log(data)
    //     );
    // }
    const getCurrPatientdata = async () => {
        console.log("patientQueue in func");
        console.log(patientQueue);
        
        const queueString = JSON.stringify(patientQueue);
    
        setCurrPatientData(await fetch(`http://localhost:3000/patients/selected/?queue=${queueString}`)
            .then((response) => response.json())
            .then((data) => 
                console.log(data)
            ))

        console.log("currPatientData")
        console.log(currPatientData)
    }
    

    useEffect(()=>{
        console.log("useEffect")
        console.log("patientQueue")
        console.log(patientQueue)
        console.log(typeof(patientQueue[0]))

        getCurrPatientdata()
        console.log(currPatientData)
        console.log("currPatientData")
    },[])



    

    return(
        // <Box>
        //     <FormGroup sx={{ml:"200px",width:"100%", display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
                
        //         <TextField variant="outlined" label="ABHA..." name="abhaNumber" defaultValue="" placeholder="ABHA..." onChange={abhaChange} sx={{my:"20px",mt:"40px",width:"300px"}}
        //             // error={nameError && nameError.length ? true : false}
        //             // helperText={nameError}
        //         />
        //         <TextField variant="outlined" label="Symptoms..." name="symptoms" defaultValue="" placeholder="Symptoms..." onChange={symptomsChange} sx={{my:"20px",mt:"40px",width:"300px"}}
        //             // error={phoneError && phoneError.length ? true : false}
        //             // helperText={phoneError}
        //         />
        //         <TextField variant="outlined" label="Vitals..." name="vitals" defaultValue="" placeholder="Vitals..." onChange={vitalsChange} sx={{my:"20px",mt:"40px",width:"300px"}}
        //             // error={mailError && mailError.length ? true : false}
        //             // helperText={mailError}
        //         />
        //         <TextField variant="outlined" label="Age..." name="age" defaultValue="" placeholder="Age..." onChange={ageChange} sx={{my:"20px",mt:"40px",width:"300px"}}  
        //             // error={mailError && mailError.length ? true : false}
        //             // helperText={mailError}
        //         />
        //         <TextField variant="outlined" label="Blood Pressure..." name="blood_pressure" defaultValue="" placeholder="Blood Pressure..." onChange={bloodPressureChange} sx={{my:"20px",mt:"40px",width:"300px"}}
        //             // error={mailError && mailError.length ? true : false}
        //             // helperText={mailError}
        //         />
        //         <TextField variant="outlined" label="Height..." name="height" defaultValue="" placeholder="Height..." onChange={heightChange} sx={{my:"20px",mt:"40px",width:"300px"}}
        //             // error={mailError && mailError.length ? true : false}
        //             // helperText={mailError}
        //         />
        //         <TextField variant="outlined" label="Weight..." name="weight" defaultValue="" placeholder="Weight..." onChange={weightChange} sx={{my:"20px",mt:"40px",width:"300px"}}
        //             // error={mailError && mailError.length ? true : false}
        //             // helperText={mailError}
        //         />



                
        //     </FormGroup>
        //     <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        //         <Button onClick={handleSubmit} variant="contained" sx={{width:"fit-content",fontSize:"20px",height:"fit-content"}}>
        //             Save
        //         </Button>
        //             {/* <NavLink to={{pathname :"/takeSurvey"}}>
        //                 <Button variant="contained" sx={{width:"fit-content",fontSize:"20px",mb:""}}>
        //                             Submit
        //                 </Button>
        //             </NavLink> */}
        //         <Button variant="contained" onClick={getPatientdata}>
        //             <Card />
        //         </Button>
        //     </Box>
        // </Box>
        <div style={{ marginLeft: '300px' }} className="relative h-full max-h-screen rounded-xl transition-all duration-200 bg-white" id="panel">
        {/* ... (existing code) */}
        <div className="w-full px-10 py-6 mx-auto" style={{ minHeight: '78vh' }}>
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Patient Details</h3>
            <FormGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <TextField variant="outlined" label="ABHA Number" name="abhaNumber" defaultValue="" placeholder="Enter ABHA Number" onChange={abhaChange} style={{ width: '100%' }} />
              <TextField variant="outlined" label="Symptoms" name="symptoms" defaultValue="" placeholder="Enter Symptoms" onChange={symptomsChange} style={{ width: '100%' }} />
              <TextField variant="outlined" label="Vitals" name="vitals" defaultValue="" placeholder="Enter Vitals" onChange={vitalsChange} style={{ width: '100%' }} />
              <TextField variant="outlined" label="Age" name="age" defaultValue="" placeholder="Enter Age" onChange={ageChange} style={{ width: '100%' }} />
              <TextField variant="outlined" label="Blood Pressure" name="blood_pressure" defaultValue="" placeholder="Enter Blood Pressure" onChange={bloodPressureChange} style={{ width: '100%' }} />
              <TextField variant="outlined" label="Height" name="height" defaultValue="" placeholder="Enter Height" onChange={heightChange} style={{ width: '100%' }} />
              <TextField variant="outlined" label="Weight" name="weight" defaultValue="" placeholder="Enter Weight" onChange={weightChange} style={{ width: '100%' }} />
            </FormGroup>
            <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <Button onClick={getCurrPatientdata} variant="contained" sx={{width:"fit-content",fontSize:"20px",height:"fit-content"}}>
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

        </div>
        </div>
        </div>
    )
}