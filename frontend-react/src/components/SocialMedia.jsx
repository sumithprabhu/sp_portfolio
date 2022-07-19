import React from 'react';
import { BsTwitter, BsInstagram , BsLinkedin} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <a href='https://www.linkedin.com/in/sumith-prabhu/' target={'blank'}>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;