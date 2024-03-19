import React, { useEffect } from 'react';

const Footer = () => {
  // useEffect(() => {
  //   fetch('http://13.48.136.54:8000/api/api-code/', {
  //     method: 'POST',
  //     headers: { Authorization: 'b236308d-6214-4566-a8ad-dd4e1f00aed5' },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <div className="border-t-4 border-[#15133c] max-w-screen-2xl m-auto"></div>
      <div className="flex justify-end gap-10 mt-5 pb-36 mr-10">
        <div className="Privacy">Privacy</div>
        <div className="Terms">Terms Of Service</div>
        <div className="Cookies">Cookies Settings</div>
      </div>
    </div>
  );
};

export default Footer;
