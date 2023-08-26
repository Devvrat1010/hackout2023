import { Box,Button } from "@mui/material";
import FormReception from "../components/FormReception";
import { NavLink } from "react-router-dom";
export default function ReceptionCounter() {
    return(
        <Box>
            <FormReception/>
            <NavLink to={"/nurse"}>
            <Button variant="contained" color="primary" sx={{margin:"10px"}}>
                Nurse
            </Button>
        </NavLink>
        </Box>
        
    )
}