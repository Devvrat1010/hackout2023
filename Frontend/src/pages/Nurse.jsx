import React from "react";
import Card from "../components/Card";
import {Button,FormControlLabel,FormGroup  } from "@mui/material"

export default function Nurse() {

    getPatientdata = () => {
        fetch("http://localhost:3000/api/patient")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

  return (
    <div >
        <Button variant="contained" onClick={getPatientdata}>
            <Card />

        </Button>
    </div>
  );
}
