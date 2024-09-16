import { useState, useEffect } from "react";
import './ProfileEdit.css';
import logo from '../../../../assets/LogoOrange.png';
import { Button, Form, Input, message, Divider } from "antd";
import { MemberInterface } from "../../../../interfaces/Member";
import { GetMemberById, UpdateMemberById } from "../../../../services/https/index";
import { useNavigate, Link } from "react-router-dom";

function ProfileEdit() {
  const navigate = useNavigate();

  const uid = Number(localStorage.getItem("id"));

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const [user, setUser] = useState<MemberInterface>();

  const onFinish = async (values: MemberInterface) => {
    values.ID = user?.ID;

    let res = await UpdateMemberById(values);
    if (res) {
      messageApi.open({
        type: "success",
        content: res.message,
      });
      setTimeout(function () {
        navigate("/Profile");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: res.message,
      });
    }
  };

  const GetMemberid = async () => {
    let res = await GetMemberById(parseInt(uid)); // ใช้ค่า uid จาก localStorage
    if (res) {
      setUser(res);
      // set form ข้อมูลเริ่มของผู้ใช้ที่เราแก้ไข
      form.setFieldsValue({
        FirstName: res.FirstName,
        LastName: res.LastName,
        Username: res.Username,
        Email: res.Email,
        Address: res.Address,
      });
    }
  };
  

  useEffect(() => {
    console.log(localStorage.getItem("id"));
    GetMemberid();
  }, []);
  

  return (
    <>
      {contextHolder}
      <div className="profileedit-container">
        <div className="profileedit-box">
          <img src={logo} className="logo" alt="Logo" />
          <h2>PROFILE EDIT</h2>
          <Divider />
          <Form name="basic" form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item label="ชื่อจริง" name="FirstName">
              <Input />
            </Form.Item>

            <Form.Item label="นามสกุล" name="LastName">
              <Input />
            </Form.Item>

            <Form.Item label="ชื่อผู้ใช้" name="Username">
              <Input />
            </Form.Item>

            <Form.Item label="เบอร์โทรศัพท์" name="PhoneNumber">
              <Input />
            </Form.Item>

            <Form.Item label="อีเมล" name="Email">
              <Input />
            </Form.Item>

            <Form.Item label="ที่อยู่" name="Address">
              <Input />
            </Form.Item>

            <Form.Item>
              <center>
                <Button type="primary" htmlType="submit" className="btn update">
                  อัปเดต
                </Button>

                <Link to="/Profile">
                  <Button type="primary" htmlType="button" className="btn cancel">
                    ยกเลิก
                  </Button>
                </Link>
              </center>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
