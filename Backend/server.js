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
        console.log(req.body)
    console.log("req.body")
    const { error } = await supabase
    .from('patient_record')
    .insert({abha_number:req.body.abhaNumber})
    
    res.send(req.body)

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

app.get("/doctors", async (req, res) => {
    try {
        let { data: doctors, error } = await supabase
            .from('doctors')
            .select('*')
        if (error) throw error
        res.status(200).json(doctors)
    } catch (error) {
        res.status(400).json(error.message)
    }
})


app.post('/nurseData', async (req, res) => {
    console.log(req.body.query)

    const { error } = await supabase
    .from('patient_record')
    .update({ symptoms: req.body.query.symptoms , vital: req.body.query.vital , age: req.body.query.age , blood_pressure: req.body.query.blood_pressure , height: req.body.query.height , weight: req.body.query.weight})
    .eq('abha_number', Number(req.body.query.abha))
})

app.get("/patients", async (req, res) => {

    try {
        let { data: patients, error } = await supabase
            .from('patient_record')
            .select('*')
        if (error) throw error
        res.status(200).json(patients)
    } catch (error) {
        res.status(400).json(error.message) 
    }
})
app.get("/patients/getOne", async (req, res) => {
    abha_number = req.query.abha_number

    console.log("Someone sent request " + req.query.abha_number)
    // fetch details from database of patient with abhe_number

    try {
        let { data: patients, error } = await supabase
            .from('abha_database')
            .select('*')
            .eq('abha_number', Number(req.query.abha_number))
        if (error) throw error
        res.status(200).json(patients)
    } catch (error) {
        res.status(400).json(error.message) 
    }


    // let num = calculateAge(req.query.abha_number);
    // res.send(abha_number)
})
// app.get("/patients/selected", async (req, res) => {
//     queue = req.query.queue
//     queue=queue.slice(1,queue.length-1)

//     console.log("Someone sent request " + typeof(queue))
//     const arr= queue.split(',')
//     for (let i = 0; i < arr.length; i++) {
//         arr[i]=Number(arr[i])
//     }

//     console.log(arr)
//     // fetch details from database of patient with abhe_number
//     for (let i = 0; i < queue.length; i++) {
//         console.log(queue)
//         try {
//             let { data: patients, error } = await supabase
//                 .from('abha_database')
//                 .select('*')
//                 .eq('abha_number', (queue[i]))
//             if (error) throw error
//             res.status(200).json(patients)
//         } catch (error) {
//             res.status(400).json(error.message)
//         }
//     }
app.get("/patients/selected", async (req, res) => {
    try {
        const queue = req.query.queue;
        const queueArr = JSON.parse(queue);

        console.log("Someone sent request " + typeof(queueArr));
        console.log(queueArr);

        const patientsData = [];

        for (let i = 0; i < queueArr.length; i++) {
            const { data: patients, error } = await supabase
                .from('abha_database')
                .select('*')
                .eq('abha_number', queueArr[i]);

            if (error) {
                throw error;
            }

            patientsData.push(...patients);
        }

        res.status(200).json(patientsData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

    // try {
    //     let { data: patients, error } = await supabase
    //         .from('abha_database')
    //         .select('*')
    //         .eq('abha_number', Number(req.query.abha_number))
    //     if (error) throw error
    //     res.status(200).json(patients)
    // } catch (error) {
    //     res.status(400).json(error.message) 
    // }


    // let num = calculateAge(req.query.abha_number);
    // res.send(abha_number)


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
