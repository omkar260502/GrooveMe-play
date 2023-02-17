import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import {Instagram, LinkedIn, Portrait, GitHub} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet Me</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src="https://media.licdn.com/dms/image/D4D03AQHRvxI0NBXf0g/profile-displayphoto-shrink_800_800/0/1669541174335?e=1681948800&v=beta&t=o4kDwfsmpL7LQAHBUodYW4Z9weFO7DaZyHceQ_5BZQI" alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Omkar Taple</h3>
                        <p>Computer Engineering Student</p>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus iste perferendis officia ducimus deserunt reiciendis quas explicabo praesentium saepe aperiam suscipit voluptas ea dolore voluptatem sunt ut sint nam blanditiis, perspiciatis iusto, vel et at! Repellendus officiis ut numquam, nam maiores veritatis aut? Quia, magnam fugit reiciendis ipsum neque, dolor dolores dolorem expedita blanditiis minus architecto, enim vero cupiditate optio ipsa? Mollitia saepe blanditiis enim corrupti repudiandae accusamus!</p>
                    
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
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;