const express = require('express');
const Model = require('../model/model');

const router = express.Router()

//Post Method
router.post('/register', async (req, res) => {
    console.log('req',req.body)
    const data = new Model({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// get all users
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;