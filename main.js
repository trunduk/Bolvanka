import express from "express";
import cors from "cors"

const app = express()
app.use(cors())

const products = [
    {id: 1, name: "T-shirt", price: "100 $"},
    {id: 2, name: "Hoodi", price: "200 $"}
]

app.get('/products', (req,res) => {
    res.send(products)
})

app.listen(8081)