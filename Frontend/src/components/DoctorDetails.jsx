import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {DataGrid} from "@mui/x-data-grid"


export default function DoctorDetails(){

    const [temp,setTemp]=useState([])
    const getData=async ()=>{
            await fetch("https://localhost:3000/doctors")
            .then((response) => response.json())
            .then(data => console.log(data) )
            // console.log(temp)
        }
    useEffect(()=>{
        getData()
    },[])
    console.log(temp)
    
    // const columns=[
    //     {field:"id",headerName:"ID",width:100},

    //     {field:"userId",headerName:"userId",width:100},
    //     {field:"title",headerName:"title",width:300 },
    //     {field:"body",headerName:"body",width:"100%"}
    // ]

    // const rows=
    //     temp.map((item)=>{
    //         return(

    //             {id:item.id,
    //             userId:item.userId,
    //             title:item.title,
    //             body:item.body}

    //         )
    //     })
    return(
        <Box>

        </Box>

    )
}