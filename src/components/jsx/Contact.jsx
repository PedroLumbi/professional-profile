import React, { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import '../css/Message.css';

const Contact = () => {

  const phoneNumber = '+50683035355'; // Número de teléfono de WhatsApp
  const emailAddress = 'lumbipp@gmail.com'; // Dirección de correo electrónico

  const [copied, setCopied] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  const handleCopyEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
      <div className="container mt-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-2 col-sm-6 text-center mb-3 btn btn-dark" onClick={handleCopyEmailClick}>
            <AiOutlineMail size={40} />
            <p className='mx-0'>{emailAddress}</p>
            {copied && (
              <div className="text-success mt-2 text-center fade-out">Copied!</div>
            )}
          </div>
          <div className="col-md-2 col-sm-6 text-center mb-3 btn btn-dark" onClick={handleWhatsAppClick}>
            <FaWhatsapp size={40} />
            <p>WhatsApp</p>
          </div>
          <div className="col-md-2 col-sm-6 text-center mb-3 btn btn-dark" onClick={() => window.location.href = 'https://www.linkedin.com/in/pedro-lumbi/'}>
            <FaLinkedin size={40} />
            <p>LinkedIn</p>
          </div>
          <div className="col-md-2 col-sm-6 text-center mb-3 btn btn-dark" onClick={() => window.location.href = 'https://github.com/PedroLumbi'}>
            <FaGithub size={40} />
            <p>GitHub</p>
          </div>
        </div>
      </div>
  );
};

export default Contact;