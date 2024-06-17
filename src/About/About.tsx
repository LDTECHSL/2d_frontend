import "./about.css"
import aboutImg from "../images/about.jpg"

const About = () =>{
    return(
        <div className="about-outer">
            <div className="about-img-outer">
                <img className="about-img" src={aboutImg} alt="" />
            </div>
            <div className="about-img-outer main-text-outer">
                <p className="about-txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestiae aliquam veritatis maxime quam fugit error sapiente, deserunt vel sunt mollitia, dolorem nobis nostrum reiciendis harum velit. Recusandae distinctio quas sequi ab, maiores temporibus, doloremque eligendi eos nam excepturi vitae, aut alias expedita possimus id voluptatibus minus ipsum cupiditate aperiam fugiat? Repellendus explicabo accusamus veritatis a, dolor eaque optio, nam dolorem minus beatae iusto tempore dolore odio ipsa vitae laborum ducimus aliquam. Nam quia ducimus suscipit voluptas eligendi hic nulla tenetur aut distinctio et laudantium consequatur quos non blanditiis illum, placeat cumque cupiditate aperiam! Quaerat officiis velit et sint dolor non sunt odit. Nam non reprehenderit aliquid iusto. Exercitationem officiis id architecto harum magni vitae quisquam sed aut ut repudiandae iste voluptatibus laudantium enim, ducimus expedita, eum cum, a temporibus libero nemo! Rerum, dolore obcaecati. Ex est atque architecto animi laboriosam esse recusandae ea expedita aspernatur, accusantium, iste quibusdam voluptatem cumque tempore laudantium reiciendis repellendus blanditiis nisi. Necessitatibus voluptatum eius delectus ipsa minus corrupti? Vel harum nihil laudantium accusantium, voluptatem eligendi ipsum consequatur. Debitis aliquid molestiae nam possimus est et, nisi omnis quos modi quam non ipsum deleniti vero ratione illum quis dolorem provident maxime quia ea alias hic aspernatur.</p>
            </div>
        </div>
    )
}

export default About