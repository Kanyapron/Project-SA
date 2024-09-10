import './Login.css';
import {ArrowBendUpLeft} from 'phosphor-react'
import logo from'../../../assets/Logo.png'
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Col} from "antd";
import { LoginInterface } from '../../../interfaces/Login';
import {Login} from "../../../services/https"


function LoginPage(){

  const navigate = useNavigate();

  const OpenLogin = () => {
    navigate('/Login');
  };


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

        location.href = "/HomeLogin";

      }, 2000);//เพื่อหน่วงเวลา 2 วินาทีก่อนจะเปลี่ยนเส้นทางไปที่หน้า /HomeLogin


    } else {

      messageApi.error(res.data.error);

    }
  };

  return (<>

    {contextHolder}

      <div className="login-container">

      <center>
        <img src={logo} className="logo" />

          <div className="login-box">

          <Form name="basic" onFinish={onFinish} autoComplete="off" layout="vertical">

            <Form.Item 
              label="Email"
              name="email" 
              rules={[{ required: true, message: "Please input your username!" },]}>
                <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" },]}>
                <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType='submit' className="login-button" onClick={OpenLogin}>Log In</Button>
            <div>Or <a onClick={() => navigate("/SignupPage")}>signup now !</a></div>
          </Form>

          </div>

        </center>
        
      </div>
  </>)
}

export default LoginPage;
