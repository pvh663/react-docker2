import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./Header.js";
import { Link } from "react-router-dom";
 
function Home() {
    const [seafood, setSeafood] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3000/seafood").then(res=> {
            setSeafood(res.data);
        })
    }, [])
    return(
        <>
            <Header />
            <h1 className="text-center mb-3">ReactJS - Hải sản Thầy Cường</h1>
            <div className="row" style={{ padding: "> 200px" }}>
                {seafood.map(item => {
                    return (
                        <>
                        <Card className="col-4 mb-2">
                            <Card.Img variant="top" src={item.imgUrl} height="300px" width="100px" />
                            <Card.Body>
                                <Card.Title>
                                    {item.productName}
                                </Card.Title>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
 
                                <Button variant="primary">
                                    <Link to="/detail" style={{ textDecoration: "none", color: "white" }}>
                                        Đặt hàng
                                    </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                        </>
                    )
                })}
            </div>
        </>
    )
}
 
export default Home;