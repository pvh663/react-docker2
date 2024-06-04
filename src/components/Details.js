import { Carousel } from 'antd';
import Header from './Header.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
 
function Details() {
 
    const [seafood, setSeafood] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3000/seafood").then(res => {
            setSeafood(res.data)
        })
    }, [])
 
    const handleSubmit = () => {
        alert("Đặt hàng thành công !")
    }
 
    return (
        <>
            <Header />
            <h1 className='text-center mt-2 mb-2'>Chi tiết đặt hàng</h1>
            <Carousel autoplay>
                {seafood.map(item => {
                    return(
                        <>
                            <div style={{ width: "100%" }}>
                                <img
                                    src={item.imgUrl}
                                    style={{
                                        backgroundSize: "cover", //hình ảnh nền sẽ được kéo giãn để lấp đầy toàn bộ kích thước của thành phần, giữ nguyên tỷ lệ của hình ảnh. Điều này giúp hình ảnh được hiển thị đầy đủ và không bị cắt xén.
                                        backgroundPosition: "center center", //Thuộc tính này xác định vị trí của hình ảnh nền, đặt ở chính giữa của thành phần.
                                        display:"flex",
                                        margin:"0 auto",
                                        padding: "0px auto"
                                    }}
 
                                    width="60%"
                                    // max-height="600px"
                                    height="600px"
                                />
                            </div>
                        </>
                    )  
                })}
            </Carousel>
           
            <br/>
            <hr/>
            <h2 className='text-center mt-2 mb-2'>Thông tin đặt hàng</h2>
            <div className='text-center mt-5' style={{ marginLeft:"30%", marginRight:"20%" }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxwidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete='off'
                >
 
                    <Form.Item
                        label="Họ và tên"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập đầy đủ để biết thông tin khách hàng',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                   
                    <Form.Item
                        label="số điện thoại"
                        name="text"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập đầy đủ để liên hệ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
 
                    <Form.Item
                        label="Địa chỉ giao hàng"
                        name="text1"
                        rules={[
                            {
                            required: true,
                            message: "Nhập đầy đủ địa chỉ",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
 
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary"
                            onClick={handleSubmit}
                        >
                            Đặt hàng
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
export default Details;