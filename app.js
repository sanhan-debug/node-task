import express from 'express'
import dotenv from 'dotenv'
import { carModel } from './Model/carModel.js'
import { connect } from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("server active")
})

app.get("/cars", async (req, res) => {
    let cars = await carModel.find()
    res.send(cars)
})

app.get("/cars/:id", async (req, res) => {
    let car = await carModel.find({ _id: req.params.id })
    res.send(car)
})

app.post("/cars", async (req, res) => {
    const car = await carModel.create(req.body)
    res.send(car)
})

app.delete("/cars/:id", async (req, res) => {
    await carModel.findByIdAndDelete({ _id: req.params.id })
    res.send("data has been deleted")

})


app.listen(3001, () => {
    console.log("server is up on 3000")

    connect(process.env.URI).then(() => console.log("connected to the mongo"))
})