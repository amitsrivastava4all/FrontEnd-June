import React from 'react';
const AboutUs = (props)=><h1>About Us {props.match.params.name}  &nbsp;  {props.match.params.descr}</h1>;
export default AboutUs;