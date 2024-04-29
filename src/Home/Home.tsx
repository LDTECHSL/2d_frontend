import "./home.css"
import abc from "../images/abc.jpeg"
import { Button } from "@mui/material"

const Home = () => {
    return (
        <div className="home-outer">
            <div className="home-inner">
                <div className="text-outer">
                    <div className="head-text"><span className="topic">Learn In-demand Skills.</span></div>
                    <div className="head-text"><span className="para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores minus ab labore id maxime natus eveniet beatae fugiat, consequatur earum vitae ullam ducimus enim et perferendis expedita voluptatum hic. Id recusandae sint debitis blanditiis expedita explicabo aliquid suscipit facilis quisquam eos veniam, asperiores beatae magnam reprehenderit voluptate saepe natus.
                    </span></div>
                    <div className="head-text">
                        <div className="head-text2">
                            <Button className="btnCourse" variant="contained">Courses</Button>
                        </div>
                        <div className="head-text2">
                            <Button className="btnCourse" variant="contained">LogOut</Button>
                        </div>
                        </div>
                        
                        
                </div>

            </div>
            <div className="home-inner">
                <img className="home-img" src={abc} alt="" />
            </div>
        </div>
    )
}

export default Home