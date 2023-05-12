import axios from "axios"
import { useState, useEffect } from "react"

const Home = () => {
    const [products, setProducts] = useState([])
     
    useEffect(() => {
        axios.get('http://localhost:8081/products').then((res) => setProducts(res.data))
    },[])

    const productsList = products.map(products => {
        console.log(products)
        return(<div key={products.id}>
            <h1>{products.name}</h1>
            <h2>{products.price}</h2>
        </div>)
    })
    return(
        <div>{productsList}</div>
    )
}

export default Home