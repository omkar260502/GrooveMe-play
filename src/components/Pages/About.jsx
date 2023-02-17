import React, {useEffect, useState} from 'react';
import './css/Profile.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/MusicCard";
import Container from "../fragment/Container";
import Grade from 'grade-js';
import SideBarOptions from "../fragment/SideBarOptions";
import {PlaylistPlay} from "@material-ui/icons";

function About() {

    const {playlists} = useSelector(state => state.musicReducer);
    const [mostPlayed, setMostPlayed] = useState([]);

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;

            return 0;
        }
    }

    useEffect(() => {
        setMostPlayed(playlists.sort(sortByProperty("timesPlayed")));
    }, [playlists]);

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    return (
        <Container>
            <div className={"Profile"}>
                <div className="top-profile">
                    <Avatar variant={"rounded"} src={require("../assets/img/logo1.png")}
                            style={{width: "150px", height: "150px"}}>
                        GM
                    </Avatar>
                    <div className="profile-detail">
                        <h3>About Groove Me</h3>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quasi officia omnis error explicabo distinctio provident hic similique! Quos laborum deserunt quo perferendis quidem.</p> */}
                        <span className={"profile-playlist"}>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay}
                                            href={"/home/playlist/instrumental"} title={"Instrumental"}/>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}
                                            title={"Electronic"}/>
                        </span>
                    </div>
                    <div className="profile-detail">
                        <p>Welcome to Groove Me, the ultimate music player that is designed to take your music listening experience to a whole new level! At Groove Me, we understand that music is an integral part of everyone's life, and it can often make or break our moods. That's why we have created a music player that not only plays your favorite tunes but also helps you discover new music based on your mood.<br/><br/>

Our unique feature of detecting your emotions through your facial expressions is what sets us apart from the rest. Our state-of-the-art technology can analyze your facial expressions and suggest music that is in sync with your mood. So, whether you're feeling happy, sad, or just need some motivation, Groove Me has got you covered.<br/><br/>

Our extensive music library has something for everyone, no matter what your taste in music may be. From the latest chart-toppers to the golden classics, we have it all. Our team of expert curators handpick the best tracks from around the world to ensure that you always have access to the finest music.<br/><br/>

At Groove Me, we believe that music should be accessible to everyone, regardless of their location or device. That's why we have made our music player available on all platforms, be it desktop, mobile, or tablet. With our easy-to-use interface, you can stream your favorite tracks in high quality, anytime, anywhere.<br/><br/>

So, what are you waiting for? Sign up now and let Groove Me take you on a musical journey like never before!</p>
                        
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Most Played</h3>
                        <div className="most-played">
                            {
                                mostPlayed.map((item, index) => (
                                    index <= 4 && <MusicCard key={item.id} music={item}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default About;
