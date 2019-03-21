import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGooglePlus, faFacebookSquare, faLinkedin, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
// ui
//import { IconButton } from 'rmwc/IconButton';

const SocialMediaLinks = ({color='#000', className}) => {
    // const groupStyle = {fontSize:36, margin: '0 auto'};
    // const socialLinkStyle = {margin:5, color};

    return (
        <div className={className}>

            <a href='https://twitter.com/artflychris'
               target="_blank"
               rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare}/></a>

            <a href='https://www.facebook.com/artfly.io/'
               target="_blank"
               rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare}/></a>

            <a href='https://www.instagram.com/artfly.io/'
               target="_blank"
               rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram}/></a>

            <a href='https://www.linkedin.com/in/chris-dennett-artfly/'
               target="_blank"
               rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/></a>

            <a href='https://plus.google.com/u/0/112775399489784880343'
               target="_blank"
               rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGooglePlus}/></a>

            <a href='https://www.youtube.com/user/nedland42/videos'
               target="_blank"
               rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutubeSquare}/></a>
        </div>
    )
};

export default SocialMediaLinks;