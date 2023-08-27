const nurseRouter = require("express").Router();


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/api/nursesData', async (req, res) => {
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
app.use(logger);

// router.get('/:id', async (req, res) => {
//     try {
//         let { data: patient, error } = await supabase
//             .from('patients')
//             .select('*')
//             .eq('id', req.params.id)
//             .single()
//         if (error) throw error
//         res.status(200).json(patient)
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// }
// )


