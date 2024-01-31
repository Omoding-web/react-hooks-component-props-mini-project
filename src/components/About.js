import React from "react";

// To define the about component that takes in an image and about text as props
function About ({ image, about }) {
    //Rendering the About component with the image and about test
    return (
        <aside>
           <img src={image} alt="blog logo" />
           <p>{about}</p>
        </aside>
    );
 };
 //To set default props for the About component
 About.defaultProps = {
    image: "https://via.placeholder.com/215"
 };

export default About;
