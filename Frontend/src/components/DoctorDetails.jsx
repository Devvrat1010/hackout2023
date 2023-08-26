import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {DataGrid} from "@mui/x-data-grid"


export default function DoctorDetails(){

    const [temp,setTemp]=useState([])
    const getData=async ()=>{
        console.log("working")
            await fetch("http://localhost:3000/doctors")
            .then((response) => response.json())
            .then(data => setTemp(data) )
        }
    useEffect(()=>{
        // getData()
    },[])
    console.log(temp)
    
    const columns=[
        {field:"id",headerName:"ID",width:300},
        {field:"first_name",headerName:"First Name",width:100},
        {field:"last_name",headerName:"Last name",width:100 },
        {field:"age",headerName:"Age",width:50},
        {field:"sex",headerName:"sex",width:200},
    ]
    const rows=
        temp.map((item)=>{
            return(
                {id:item.uid,
                first_name:item.first_name,
                last_name:item.last_name,
                age:item.age,
                sex:item.sex
                })
        })


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
             <DataGrid
                    columns={columns}
                    rows={rows}
                    getRowHeight={() => 'auto'}
                />  

        </Box>

    )
}