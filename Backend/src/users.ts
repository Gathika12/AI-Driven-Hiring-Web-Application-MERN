import express from "express";
const router= express.Router()

router.get("/new", (req,res) =>{
    res.json("New Form")
})

router.get("/new1", (req,res) =>{
    res.json("New Form2")
})

module.exports = router