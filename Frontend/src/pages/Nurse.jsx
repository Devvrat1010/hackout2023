import React,{useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField  } from "@mui/material"
import {NavLink} from "react-router-dom"
import NurseForm from "../components/NurseForm";

export default function Nurse() {



  return (
    <div >
        <NurseForm/>
    </div>
  );
}
