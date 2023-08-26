const nurseRouter = require("express").Router();
const supabase = require("../supabase.js");

nurseRouter.use(cors())
nurseRouter.use(bodyParser.json())
nurseRouter.use(bodyParser.urlencoded({ extended: true }))

nurseRouter.post("/reception/uploadAbha",jsonParser,async (req,res) => {
    const {abhaNumber} = req.body
    console.log(abhaNumber)
    const { error } = await supabase
    .from('patient_record')
    .insert({ abha_number: JSON.stringify(abhaNumber) })
    
    res.send(JSON.stringify(abhaNumber))

})
app.use(logger);
