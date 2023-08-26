import React,{useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField  } from "@mui/material"
import {NavLink} from "react-router-dom"
import NurseForm from "../components/NurseForm";
import DoctorDetails from "../components/DoctorDetails";

export default function Nurse() {

    console.log(localStorage.getItem("countPatient"))
    console.log(localStorage.getItem("patientQueue"))
  return (
    <div >
        <NurseForm/>
        <DoctorDetails/>

    </div>
  );
}