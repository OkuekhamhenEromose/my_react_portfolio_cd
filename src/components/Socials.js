import React from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImGithub,
  ImLinkedin
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='' target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href='' target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href='' target='_blank'>
          <ImGithub />
        </a>
      </li>
      <li>
        <a href='' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
