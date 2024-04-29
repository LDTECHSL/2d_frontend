import "./signup.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Avatar, Button, InputAdornment, Link, TextField, Typography } from "@mui/material";
import avatar from "../images/avatar.png"

const SignUp = () =>{
    
    const navigate = useNavigate();

    const navLogin = () =>{
        navigate("/")
    }

    const styles = {
        label: {
            color: 'white'
        },
        input: {
            color: 'white'
        }
    };
    return(
        <div className="login-outerS">
            <div className="login-innerS">
                <div className="login-headerS">
                    <img className="login_imgS" src={avatar} alt="" />
                </div>
                <div className="login-headerS">
                    <span className="txt1S">SignUp Form</span>
                </div>
                <div className="login-headerS">
                    <TextField
                        className="txtFieldS"
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
                <div className="login-headerS">
                    <TextField
                        className="txtFieldS"
                        id="outlined-basic"
                        type="password"
                        label="Password"
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
                
                <div className="login-headerS">
                    <TextField
                        className="txtFieldS"
                        id="outlined-basic"
                        type="password"
                        label="Confirm Password"
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
                <div className="login-headerS">
                    <Button className="login-btnS" variant="contained">SignUp</Button>
                </div>
                <div className="login-headerS">
                    <div className="text-inS"></div>
                    <div className="text-in1S"><span onClick={navLogin} className="txt2">Back to Login</span></div>
                    <div className="text-inS"></div>
                </div>
                <div className="login-headerS">
                    <span className="txt3S">Version : 2024.04.25.1</span>
                </div>
            </div>
        </div>
    )
}

export default SignUp