import { useEffect } from "react";
import './ProfileEdit.css';
import { ArrowBendUpLeft } from 'phosphor-react';
import logo from '../../../../assets/LogoOrange.png';

import {Space,Button,Form,Input,message,Divider,} from "antd";
import { MemberInterface } from "../../../../interfaces/Member";
import { GetMemberById, UpdateMemberById } from "../../../../services/https/index";
import { useNavigate, Link, useParams } from "react-router-dom";

function ProfileEdit (){

  const navigate = useNavigate();

  const { id } = useParams<{ id: any }>();

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const getUserById = async (id: string) => {

    let res = await GetMemberById(id);

    if (res.status == 200) {

      form.setFieldsValue({

        first_name: res.data.first_name,

        last_name: res.data.last_name,

        username: res.data.username,

        phonenumber: res.data.phonenumber,

        email: res.data.email,

        address: res.data.address,

      });

    } else {

      messageApi.open({

        type: "error",

        content: "ไม่พบข้อมูลผู้ใช้",

      });

      setTimeout(() => {

        navigate("/Profile");

      }, 2000);

     }

  };

  const onFinish = async (values: MemberInterface) => {

    let payload = {
      ...values,
    };

    const res = await UpdateMemberById(id, payload);

    if (res.status == 200) {
      messageApi.open({
        type: "success",
        content: res.data.message,
      });

      setTimeout(() => {
        navigate("/Profile");
      }, 2000);

    } else {
      messageApi.open({
        type: "error",
        content: res.data.error,
      });

    }

  };

  useEffect(() => {
    getUserById(id);
  }, []);


  return (<>
    {contextHolder}
    <div className="profileedit-container">
      
      <div className="profileedit-box">
        
        <img src={logo} className="logo" alt="Logo" />
        <h2>PROFILE EDIT</h2>
                                                                              {/* autoComplete="off" */}
        <Divider />                                                                     
        <Form name="basic" form={form} layout="vertical" onFinish={onFinish}> 

          <Form.Item label="ชื่อจริง" name="first_name">
            <Input />
          </Form.Item>

          <Form.Item label="นามสกุล" name="last_name">
            <Input />
          </Form.Item>

          <Form.Item label="ชื่อผู้ใช้" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="เบอร์โทรศัพท์" name="phonenumber">
            <Input />
          </Form.Item>

          <Form.Item label="อีเมล" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="ที่อยู่" name="address">
            <Input />
          </Form.Item>

        <Form.Item>
          
          <center>
            <Button type="primary" htmlType="submit" className="btn update">อัปเดต</Button>

            <Link to="/Profile">
            <Button type="primary" htmlType="button" className="btn cancel">ยกเลิก</Button>
            </Link>
          </center>
          
        </Form.Item>


        </Form>

      </div>
    </div>
  </>);
}

export default ProfileEdit;
