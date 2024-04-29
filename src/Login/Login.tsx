import "./login.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Avatar, Button, InputAdornment, Link, TextField, Typography } from "@mui/material";
import avatar from "../images/avatar.png"


const Login = () => {
    const [isVisibleIcon, setVisibleIcon] = useState(true)
    const [isInVisibleIcon, setInVisibleIcon] = useState(false)

    const showPassword = () => {
        setShowPassword(true)
        setInVisibleIcon(true)
        setVisibleIcon(false)
    }
    const hidePassword = () => {
        setShowPassword(false)
        setInVisibleIcon(false)
        setVisibleIcon(true)
    }
    const navigate = useNavigate();

    const navSignUp = () =>{
        navigate("/signup")
    }
    const navHome = () =>{
        navigate("/home")
    }
    const [showPW, setShowPassword] = useState(false);

    const styles = {
        label: {
            color: 'white'
        },
        input: {
            color: 'white'
        }
    };

    return (
        <div className="login-outer">
            <div className="login-inner">
                <div className="login-header">
                    <img className="login_img" src={avatar} alt="" />
                </div>
                <div className="login-header">
                    <span className="txt1">Login Form</span>
                </div>
                <div className="login-header">
                    <TextField
                        className="txtField"
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        InputLabelProps={{
                            style: styles.label
                        }}
                        InputProps={{
                            style: styles.input
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set outline color to white
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Set outline color to white on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'orange', // Set outline color to orange on focus
                                },
                            },
                        }}
                    />
                </div>
                <div className="login-header">
                    <TextField
                        className="txtField"
                        id="outlined-basic"
                        type={showPW ? "text" : "password"}
                        label="Password"
                        variant="outlined"
                        InputLabelProps={{
                            style: styles.label
                        }}
                        InputProps={{
                            style: styles.input,
                            endAdornment: (
                                <InputAdornment position="end">
                                    {isInVisibleIcon && (<VisibilityOffIcon onClick={hidePassword} className="visible" />)}
                                    {isVisibleIcon && (<VisibilityIcon onClick={showPassword} className="nonVisible" />)}
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set outline color to white
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Set outline color to white on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'orange', // Set outline color to orange on focus
                                },
                            },
                        }}

                    />
                </div>
                <div className="login-header">
                    <Button onClick={navHome} className="login-btn" variant="contained">Login</Button>
                </div>
                <div className="login-header">
                    <div className="text-in"><span onClick={navSignUp} className="txt2">SignUp</span></div>
                    <div className="text-in2"><span className="txt2">Forget Password?</span></div>
                </div>
                <div className="login-header pad">
                    <span className="txt3">Version : 2024.04.25.1</span>
                </div>
            </div>
        </div>
    )
}

export default Login