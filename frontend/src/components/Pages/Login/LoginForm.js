import styled from "styled-components";
import {Card, InputWrapper} from '../../Global.styled'
import ImageBlock from "../../Reusable components/ImageBlock";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';  // Added useRef
import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL;

const LoginForm = () => {
    

    const location = useLocation()
    const navigate = useNavigate();
    const currentUser = location.pathname.split("/").pop()
    const emailRef = useRef(null);
    const [email, setEmail] = useState('');

    const passwordRef = useRef(null);


    // I'm going to make it auto fill in demo logins for testing convenience 
    // I haven't figured it out yet so leaving this attempt here to finish later
    const handleEmailClick = (email) => {
        console.log('email: '+ email);
        if(emailRef.current && passwordRef.current) {
            emailRef.current.value = email;
            setEmail(email);
            passwordRef.current.value = '123';
        }
    }
    
    const handleForgotPassword = () => {
        axios.get(API_URL + "auth/me", { withCredentials: true })
        .then((res) => {
            toast.success('Fetched user data successfully');
            console.log(res.data);
        })
        .catch((err) => {
            toast.error('Failed to fetch user data');
        });
    }
    

    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: {}});
    const loginSubmit = data => {
        const {Email: username, Password: password} = data;
        data = {username, password, user_type: currentUser.toUpperCase()};
        console.log(data);
        axios.post(API_URL + "auth/login", data, { withCredentials: true })
        .then((res) => {
            toast.success('Logged in successfully');
            setTimeout(() => {
                navigate('/dashboard'); 
                window.location = '/dashboard';
            }, 100);
        })
        .catch((err) => {
            toast.error(err.response.data.detail);
        });
    }
    
    const formInputs = [
        {
            label: "Company Email ID:",
            type: "email",
            name:"Email",
            placeholder: "Enter Company Email ID",

        },
        {
            label: "Password:",
            type: "password",
            name:"Password",
            placeholder: "Enter Password",
        },
    ]
    return(
        <LoginFormCard className="flex-center">
            
            <NavLink to="/">
                <ImageBlock className="logo" src={require("../../../assets/images/logo.png")} w="150px"/>
            </NavLink>
            <form onSubmit={handleSubmit((data) => loginSubmit(data))}>
                <InputWrapper>
                    <label htmlFor="Email">Company Email ID:*</label>
                    <input type="email" ref={{email}} {...register("Email", { required: "Email is required" })} placeholder="Enter Company Email ID" />
                    {errors.Email && <span>{errors.Email.message}</span>}
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="Password">Password:*</label>
                    <input type="password" ref={passwordRef} {...register("Password", { required: "Password is required" })} placeholder="Enter Password" />
                    {errors.Password && <span>{errors.Password.message}</span>}
                </InputWrapper>
                

                <div>
                    <input type="submit" value="Submit" />  
                    <div>
                        <div className="flex-center">
                            <input type="checkbox" id="remember_me" name="remember_me"/> <label htmlFor="remember_me">Remember Me</label>
                        </div>
                        <NavLink to="#" onClick={handleForgotPassword}>
                            Forgot Password?
                        </NavLink>
                    </div>
                </div>
                {
                    currentUser !== "employee" && 
                    <p>
                        Don't have an account? <NavLink to={`/sign-up/${currentUser}/`}>Register Here</NavLink>
                    </p>
                }
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Advertiser</td>
                        <td onClick={() => handleEmailClick('advertiser@example.com')}>advertiser@example.com</td>
                    </tr>
                    <tr>
                        <td>Business (lot owner)</td>
                        <td onClick={() => handleEmailClick('business@example.com')}>business@example.com</td>
                    </tr>
                    <tr>
                        <td>Customer Support</td>
                        <td onClick={() => handleEmailClick('customer_support@example.com')}>customer_support@example.com</td>
                    </tr>
                    <tr>
                        <td>Lot Specialist</td>
                        <td onClick={() => handleEmailClick('lot_specialist@example.com')}>lot_specialist@example.com</td>
                    </tr>
                    <tr>
                        <td>Advertising Specialist</td>
                        <td onClick={() => handleEmailClick('advertising_specialist@example.com')}>advertising_specialist@example.com</td>
                    </tr>
                    <tr>
                        <td>Accountant</td>
                        <td onClick={() => handleEmailClick('accountant@example.com')}>accountant@example.com</td>
                    </tr>
                </tbody>
            </table>

            <p>Password is always 123</p>

        </LoginFormCard>
    )
}
const LoginFormCard = styled(Card)`
    padding: 40px 60px;
    width: 500px;
    flex-direction: column;
    gap: 40px;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    input[type='submit']{
        padding: 15px 30px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-weight: 500;
        background-color: #080963;
        border-radius: 15px;
        cursor: pointer;
        text-transform: uppercase;
    }

    p{
        margin-left: 10px;
        a{
            text-decoration: underline;
        }
    }

    input[type="submit"]{
        margin-bottom: 7px;
    }

    span{
        margin-bottom: -12px;
    }

    input[type="submit"] ~ div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;

        div{
            gap: 5px;
        }

        input[type="checkbox"]{
            width: 15px;
            height: 15px;
        }

        a{
            text-decoration: underline;
            text-transform: capitalize;
        }
    }
`
export default LoginForm
