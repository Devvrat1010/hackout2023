// import env 
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const logger = require("./middleware/logger.js");
const supabase = require("./supabase.js");


const app = express();
app.use(
    cors({
        origin: "*",
    })
);



app.use(bodyParser.json());
// app.use(logger);


// const doctor = require("./routes/doctors.js");
// const nurseRouter = require("./routes/nurses.js");
// const patientsRouter = require("./routes/patients.js");

// app.use("/doctor", doctor);
// app.use("/nurse", nurseRouter);
// app.use("/patients", patientsRouter);

app.get("/", (req, res) => {
    res.send("Hosted server is running!");
});

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
