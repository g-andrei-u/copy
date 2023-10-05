import React from "react";
import ReactPlayer from "react-player";


const About = () => {
    return (
        <section className="about-page">
            <div className="about">
            <h1>About Us:</h1>
            <br />
                <div className="video">
                    <ReactPlayer 
                        url={'https://www.youtube.com/watch?v=2beTUPh7k14'} 
                        width="604px"
                        height="340px"
                        controls
                    />
                </div>
                <br /><br />
                <div>
                    <p>A channel to overcome European biases and differences, and offer a cautiously optimistic outlook on Europe's future.</p>
                    <p>Into Europe is a channel with no external funding covering European topics related to geopolitics, politics, policy, and the news in general.</p>
                </div>
            </div>
        </section>
    )
}

export default About;