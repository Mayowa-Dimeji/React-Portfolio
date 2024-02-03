import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#0a192f] mt-10 text-gray-300 py-8'>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-4'>
          <a
            href='https://www.linkedin.com/in/mayowa-oladimeji/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://github.com/Mayowa-Dimeji'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='mailto:mayowaoladimejikassie@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <HiOutlineMail size={30} /> */}
          </a>
        </div>

        <p className='mt-4 text-sm'>
          © {new Date().getFullYear()} May Dimeji. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
