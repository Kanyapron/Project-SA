import "./Signup.css";
import { ArrowBendUpLeft } from "phosphor-react";
import logo from "../../../assets/LogoOrange.png";

import {Button,Form,Input,message,} from "antd";
import { useNavigate } from "react-router-dom";
import { CreateMember } from "../../../services/https";
import { MemberInterface } from "../../../interfaces/Member";
import Icon from "@ant-design/icons/lib/components/Icon";

function SignupPage() {

  const navigate = useNavigate();

  const OpenSignup = () => {
    navigate('/Signup');
  };
  
  const [messageApi, contextHolder] = message.useMessage();
  
  const onFinish = async (values: MemberInterface) => {
  
    let res = await CreateMember(values);
  
      if (res.status == 201) {
        messageApi.open({
          type: "success",
          content: res.data.message,});
  
        setTimeout(function () {
          navigate("/HomePage");
        }, 2000);
  
      } else {
        messageApi.open({  
          type: "error",
          content: res.data.error,
        });
  
      }
  
    };
  
  
  return (
    <>
      {contextHolder}

      <div className="signup-container">

        <div className="back-arrow">
          <a onClick={() => navigate("/")}><ArrowBendUpLeft size={32} /></a>
        </div>

        <div className="signup-box">

          <img src={logo} className="logo" alt="Logo" />

          <h2>SIGN UP</h2>

          <Form name="basic" onFinish={onFinish} autoComplete="off" layout="vertical">

            <Form.Item label="ชื่อจริง" name="first_name" rules={[{required: true,message: "กรุณากรอกชื่อ !",},]}>
              <Input />
            </Form.Item>

            <Form.Item label="นามสกุล" name="last_name" rules={[{required: true,message: "กรุณากรอกนามสกุล !",},]}>
              <Input />
            </Form.Item>

            <Form.Item label="ชื่อผู้ใช้" name="username" rules={[{required: true,message: "กรุณากรอกชื่อผู้ใช้ !",},]}>
              <Input />
            </Form.Item>
          
            <Form.Item label="เบอร์โทรศัพท์" name="phonenumber" rules={[{pattern: /^[0-9]{10}$/,required: true,message: "กรอกเบอร์โทรศัพท์ให้ถูกต้อง !",},]}>
              <Input />
            </Form.Item>

            <Form.Item label="อีเมล" name="email" rules={[{type: "email",message: "รูปแบบอีเมลไม่ถูกต้อง !",},{required: true,message: "กรุณากรอกอีเมล !",},]}>
              <Input />
            </Form.Item>
            
            <Form.Item label="รหัสผ่าน" name="password" rules={[{required: true,message: "กรุณากรอกรหัสผ่าน !",},]}>
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="register">REGISTER</Button>
            </Form.Item>

          </Form>

        </div>

      </div>
    </>
  );
}

export default SignupPage;
