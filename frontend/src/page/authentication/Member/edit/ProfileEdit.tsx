import { useState, useEffect } from "react";
import './ProfileEdit.css';
import logo from '../../../../assets/LogoOrange.png';
import { Button, Form, Input, message, Divider } from "antd";
import { MemberInterface } from "../../../../interfaces/Member";
import { GetMemberById, UpdateMemberById } from "../../../../services/https/index";
import { useNavigate, Link } from "react-router-dom";

function ProfileEdit() {
  const navigate = useNavigate();

  const storedUid = Number(localStorage.getItem("id")); // เปลี่ยน uid จาก localStorage

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const [uid , setUid] = useState<number | null>(Number(localStorage.getItem("id")));

  const [user, setUser] = useState<MemberInterface>();

  // ฟังก์ชันสำหรับส่งค่าการแก้ไขข้อมูล
  const onFinish = async (values: MemberInterface) => {
    if (uid !== null) {
      values.ID = user?.ID;
  
      const res = await UpdateMemberById(uid, values);  // ตรวจสอบ uid ก่อนที่จะส่ง
      if (res) {
        messageApi.open({
          type: "success",
          content: res.message,
        });
        setTimeout(() => {
          navigate("/Profile");
        }, 2000);
      } else {
        messageApi.open({
          type: "error",
          content: res.message,
        });
      }
    } else {
      messageApi.open({
        type: "error",
        content: "ไม่พบ User ID",
      });
    }
  };

  useEffect(() => {
    // ย้าย GetMemberid เข้าใน useEffect
    const GetMemberid = async () => {
      const res = await GetMemberById(storedUid); // ใช้ storedUid จาก localStorage
      if (res) {
        setUser(res);
        // ตั้งค่าให้ฟอร์มมีข้อมูลของสมาชิก
        form.setFieldsValue({
          FirstName: res.FirstName,
          LastName: res.LastName,
          Username: res.Username,
          Email: res.Email,
          Address: res.Address,
        });
      }
    };

    setUid(Number(localStorage.getItem("id")));
    console.log(uid);
    GetMemberid();
  }, [uid, storedUid, form]); // กำหนด dependencies ให้เหมาะสม

  return (
    <>
      {contextHolder}
      <div className="profileedit-container">
        <div className="profileedit-box">
          <img src={logo} className="logo" alt="Logo" />
          <h2>แก้ไขโปรไฟล์</h2>
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
