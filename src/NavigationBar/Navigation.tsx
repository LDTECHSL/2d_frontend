import "./navigation.css"
import twod from "../images/twod.jpg"
import avatar from "../images/avatar.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
    const [selectedComponent, setSelectedComponent] = useState<string>("home");
    const location = useLocation();

    useEffect(() => {

        switch (location.pathname) {
            case "/home":
                setSelectedComponent("home");
                break;
            case "/courses":
                setSelectedComponent("courses");
                break;
            case "/about":
                setSelectedComponent("about");
                break;
            case "/contact":
                setSelectedComponent("contact");
                break;
            default:
                setSelectedComponent("home");
        }
    }, [location.pathname]);

    const [menuVisible, setMenuVisible] = useState(false)
    const [profile, setProfile] = useState(false)

    const navigate = useNavigate();

    const menuOpen = () => {
        setMenuVisible(!menuVisible)
        setProfile(false)
    }
    const profileOpen = () => {
        setProfile(!profile)
        setMenuVisible(false)
    }

    const homeNavigate = () => {
        menuOpen();
        setSelectedComponent("home");
        navigate("/home")
    }
    const coursesNavigate = () => {
        menuOpen();
        setSelectedComponent("courses");
        navigate("/courses")
    }
    const aboutNavigate = () => {
        menuOpen();
        setSelectedComponent("about");
        navigate("/about")
    }
    const contactNavigate = () => {
        menuOpen();
        setSelectedComponent("contact");
        navigate("/contact")
    }

    return (
        <div>
            <div className="navbar-outer">
                <div className="logo-outer">
                    <MenuIcon onClick={menuOpen} className="menu-icon" />
                    <img onClick={homeNavigate} className="nav-logo" src={twod} alt="" />
                    <span onClick={homeNavigate} className="logo-txt"><i>TWO</i><span className="logo-txt lt1"><i>D</i></span> </span>
                </div>
                <div className="menu-outer">
                    <div className={`menu-items ${selectedComponent === "home" ? "active" : ""}`} onClick={homeNavigate}><span className="list"><b>Home</b></span></div>
                    <div className={`menu-items ${selectedComponent === "courses" ? "active" : ""}`} onClick={coursesNavigate}><span className="list"><b>Courses</b></span></div>
                    <div className={`menu-items ${selectedComponent === "about" ? "active" : ""}`} onClick={aboutNavigate}><span className="list"><b>About</b></span></div>
                    <div className={`menu-items ${selectedComponent === "contact" ? "active" : ""}`} onClick={contactNavigate}><span className="list"><b>Contact Us</b></span></div>

                </div>
                <img onClick={profileOpen} className="userDp" src={avatar} alt="" />
            </div>
            {menuVisible && (
                <div className="side-menu-outer">
                    <div className="side-menu-inner">
                        <div className={`menu-items ${selectedComponent === "home" ? "active" : ""}`} onClick={homeNavigate}><span className="list"><b>Home</b></span></div>
                    </div>
                    <div className="side-menu-inner">
                        <div className={`menu-items ${selectedComponent === "courses" ? "active" : ""}`} onClick={coursesNavigate}><span className="list"><b>Courses</b></span></div>
                    </div>
                    <div className="side-menu-inner">
                        <div className={`menu-items ${selectedComponent === "about" ? "active" : ""}`} onClick={aboutNavigate}><span className="list"><b>About</b></span></div>
                    </div>
                    <div className="side-menu-inner">
                        <div className={`menu-items ${selectedComponent === "contact" ? "active" : ""}`} onClick={contactNavigate}><span className="list"><b>Contact Us</b></span></div>
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