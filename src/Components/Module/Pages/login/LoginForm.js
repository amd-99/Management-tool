import React from 'react'
import { Form } from 'antd';
import { Input, message } from 'antd';
import Button1 from '../../globalComponents/Button/Button1';
import Zeronsec_Logo from "../../../../Core/Logo/Zeronsec_logo.svg"
import LoginPage from './LoginPage';
import Auth from "../../../../Auth";
//  import {  useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
 import { Login_Verification } from "../../../../Core/Redux/Action/LoggAction";
import axios from 'axios';
export default function LoginForm(props) {
  const history = useHistory();
  const [form] = Form.useForm();
  //  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log(values);
    // form.resetFields();
    //  dispatch(Login_Verification(values))
     
    axios.post(`/login`, values)
      .then(
        response => {
    
          if (response.data.status === true) {

            localStorage.setItem("authenticated", response.data.status);
            localStorage.setItem("users", response.data.data.username);
            localStorage.setItem("status", response.data.status);
            localStorage.setItem("token", response.data.data.jwtToken.token);

            return (
              Auth.login(() => {
                history.push("/layout/users/");
                message.success('You have successfully logged in')
              })

            )
          } else {
            return (
              message.error('Please Enter Valid Username & Password')
            );
          };
        }
      )
  };



  return (
    <LoginPage  {...props}>
      <div className="loginClass">



        <img className="Logo2" src={Zeronsec_Logo} alt="Zeronsec" />


        <h3 className="Head1">Welcome back</h3>


        <h2 className="Head2">Login to your account</h2>


        <Form
          className="FormClass"
          form={form}
          id="loginnow"
          onFinish={onFinish}

        >

          <Form.Item name="username" label="User Name :" rules={[

            {
              required: true,
              message: 'Please input your username',
            },
          ]} >

            <Input placeholder="Enter Your User Name" />
          </Form.Item>




          <Form.Item className="logpass" name="password" label="Password :"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },

            ]} >

            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>
          <div style={{ width: "50%", display: "flex"  }}>

            <span className='F1'
             style={{cursor:"pointer" }}
              onClick={() => {
                Auth.loginProcess(() => {
                  history.push("/req_otp");
                });
              }}>
              Forgot&nbsp;Password?
        </span>


          </div>

          <Button1 type='primary'

            key="submit"
            htmlType="submit" form="loginnow" buttonStyle="btn-success-solid" buttonSize="btn-medium"
            className="button_css"
          >Login&nbsp;Now</Button1>


        </Form>


      </div>
    </LoginPage>
  )
}
