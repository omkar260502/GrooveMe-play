import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import {Instagram, LinkedIn, Portrait, GitHub, Mail} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the Developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src="https://media.licdn.com/dms/image/D4D03AQHRvxI0NBXf0g/profile-displayphoto-shrink_800_800/0/1669541174335?e=1681948800&v=beta&t=o4kDwfsmpL7LQAHBUodYW4Z9weFO7DaZyHceQ_5BZQI" alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Omkar Taple</h3>
                        <p>Computer Engineering Student</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Hi, I'm Omkar Taple, a third year computer science student from Pune with a passion for Tech. As a Web Developer and Machine Learning enthusiast, I enjoy building innovative projects that merge the two worlds.

</p><p>In addition, I also have a passion for competitive coding. I enjoy participating in coding challenges and developing algorithms to solve complex problems. It's a rewarding and challenging pursuit that keeps my mind sharp and my skills honed.

</p><p>I'm excited about the possibilities that technology can bring to the world of music, and I'm always exploring new ideas and experimenting with new tools. If you have any questions or ideas for collaboration, feel free to reach out – I'd love to hear from you!</p>
                    
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://github.com/omkar260502/"} title={"omkar260502"}>
                            <GitHub/>
                        </IconButton>
                        
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/omkar-taple-a68951205/"}  title={"omkar-taple-a68951205"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/_o_m__k_a_r_/"}  title={"_o_m__k_a_r_"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"#"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"mailto:omkartaple.3@gmail.com"}  title={"Web Portfolio"}>
                            <Mail/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;