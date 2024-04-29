import "./navigation.css"
import twod from "../images/twod.jpg"
import avatar from "../images/avatar.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Button } from "@mui/material";

const Navigation = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const [profile, setProfile] = useState(false)

    const menuOpen = () => {
        setMenuVisible(!menuVisible)
        setProfile(false)
    }
    const profileOpen = () =>{
        setProfile(!profile)
        setMenuVisible(false)
    }

    return (
        <div>
            <div className="navbar-outer">
                <div className="logo-outer">
                    <MenuIcon onClick={menuOpen} className="menu-icon" />
                    <img className="nav-logo" src={twod} alt="" />
                    <span className="logo-txt"><i>TWO</i><span className="logo-txt lt1"><i>D</i></span> </span>
                </div>
                <div className="menu-outer">
                    <div className="menu-items"><span className="list"><b>Home</b></span></div>
                    <div className="menu-items"><span className="list"><b>Courses</b></span></div>
                    <div className="menu-items"><span className="list"><b>About</b></span></div>
                    <div className="menu-items"><span className="list"><b>Contact Us</b></span></div>
                    
                </div>
                <img onClick={profileOpen} className="userDp" src={avatar} alt="" />
            </div>
            {menuVisible && (
                <div className="side-menu-outer">
                    <div className="side-menu-inner">
                        <div className="menu-items"><span className="list"><b>Home</b></span></div>
                    </div>
                    <div className="side-menu-inner">
                        <div className="menu-items"><span className="list"><b>Courses</b></span></div>
                    </div>
                    <div className="side-menu-inner">
                        <div className="menu-items"><span className="list"><b>About</b></span></div>
                    </div>
                    <div className="side-menu-inner">
                        <div className="menu-items"><span className="list"><b>Contact Us</b></span></div>
                    </div>
                </div>
            )}
            {profile && (
            <div className="profile-outer">
                <div className="p-inner pin">
                    <span className="username-txt">Dasun</span>
                </div>
                <div className="p-inner">
                    <Button className="btn" variant="contained">Settings</Button>
                </div>
                <div className="p-inner">
                    <Button className="btn" variant="contained">Logout</Button>
                </div>
            </div>
        )}
        </div>
    )
}
export default Navigation