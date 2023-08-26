// import env 
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const logger = require("./middleware/logger.js");
const supabase = require("./supabase.js");
// const urlencodedParser = bodyParser.urlencoded({ extended: false })


const app = express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions)) 
app.use(bodyParser.json());

app.post("/reception/uploadAbha",async (req,res) => {
    const { error } = await supabase
    .from('patient_record')
    .insert({ abha_number: JSON.stringify(req.body.query) })
    
    res.send(JSON.stringify(req.body.query))

})

app.get('/nursesData', async (req, res) => {
    try {
        let { data: patients, error } = await supabase
            .from('patient_record')
            .select('abha_number',"symptoms")
        if (error) throw error
        res.status(200).json(patients)
    } catch (error) {
        res.status(400).json(error.message)
    }
})
app.post('/nurseData', async (req, res) => {
    console.log(req.body.query)
    // const {
    //     abha,
    //     symptoms,
    //     vital,
    //     age,
    //     blood_pressure,
    //     height,
    //     weight
    // }=req.body.query
    
    const { error } = await supabase
    .from('patient_record')
    .update({ symptoms: req.body.query.symptoms , vital: req.body.query.vital , age: req.body.query.age , blood_pressure: req.body.query.blood_pressure , height: req.body.query.height , weight: req.body.query.weight})
    .eq('abha_number', Number(req.body.query.abha))
})


// const doctor = require("./routes/doctors.js");
// const nurseRouter = require("./routes/nurses.js");
// const patientsRouter = require("./routes/patients.js");
// const receptionRouter = require("./routes/reception.js");

// app.use("/doctor", doctor);
// app.use("/nurse", nurseRouter);
// app.use("/patients", patientsRouter);
// app.use("/reception", receptionRouter);

app.get("/", (req, res) => {
    res.send("Hosted server is running!");
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
