import './Login.css';
import {ArrowBendUpLeft} from 'phosphor-react'
import logo from'../../../assets/Logo.png'
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Col, Flex, Card, Row} from "antd";
import { LoginInterface } from '../../../interfaces/Login';
import {Login} from "../../../services/https"
import HomeLogin from '../../HomeLogin/homelogin';


function LoginPage(){

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();


  const onFinish = async (values: LoginInterface) => {  

    let res = await Login(values);


    if (res.status == 200) {

      messageApi.success("Log-in successful"); 

      localStorage.setItem("isLogin", "true"); // สถานะการเข้าสู่ระบบ
 
      localStorage.setItem("page", "HomLogin"); // หน้าที่จะเปลี่ยนไปหลังจากเข้าสู่ระบบ

      localStorage.setItem("token_type", res.data.token_type); // ประเภทของ token

      localStorage.setItem("token", res.data.token); // token ที่ได้รับจาก API

      localStorage.setItem("id", res.data.id); // user ID

      setTimeout(() => { 

        location.href = "/";

      }, 2000);//เพื่อหน่วงเวลา 2 วินาทีก่อนจะเปลี่ยนเส้นทางไปที่หน้า /HomeLogin


    } else {

      messageApi.error(res.data.error);

    }
  };

  return (<>

    {contextHolder}

    <Flex justify="center" align="center" className="login">
      
      <Card className="card-login" style={{ width: 600,}}>

        <Row align={"middle"} justify={"center"} style={{ height: "400px" }}>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <center>
            <img alt="logo" style={{ width: "30%" }} src={logo} className="images-logo"/>
          </center>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form name="basic" onFinish={onFinish} autoComplete="off" layout="vertical">
              
              <Form.Item 
                label="Email"
                name="email" 
                rules={[{ required: true, message: "Please input your email!" },]}>
                <Input/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" },]}>
                <Input.Password />
              </Form.Item>

              <center>
                <Button type="primary" htmlType='submit' className="login-button">Log In</Button>
                <div>Or <a onClick={() => navigate("/SignupPage")}>signup now !</a></div>
              </center>

            </Form>
          </Col>

        </Row>

      </Card>

    </Flex>
  </>)
}

export default LoginPage;
