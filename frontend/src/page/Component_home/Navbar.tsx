import "./navbar.css";
import Logo from "../../assets/logo copy.png"
import { Button, Form, Input, message, Col, Flex, Card, Row} from "antd";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} className='logo' alt='Course Logo' />
      <div className='right-section'>
        <div className='links'>
          <div className="search">
            <input type="text" placeholder="search"/>
            
          </div>
            <Link to='/Login'>
              <button className="button-login">LOG IN</button>
            </Link>
            <Link to='/SignupPage'>
              <button className="button-sign-up">SIGN UP</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

