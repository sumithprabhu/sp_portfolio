import React from 'react';
import { BsTwitter, BsInstagram , BsLinkedin} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/SumithPrabhu1' target={'blank'}>
      <BsTwitter />
    </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/sumith-prabhu/' target={'blank'}>
      <BsLinkedin />
      </a>
    </div>
    <div>
    <a href='https://www.instagram.com/sumith.prabhu/' target={'blank'}>
      <BsInstagram />
    </a>
    </div>
  </div>
);

export default SocialMedia;