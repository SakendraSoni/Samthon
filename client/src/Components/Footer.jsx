import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_PROTOCOL + process.env.REACT_APP_HOST_URL;

const Footer = () => {
  const [APICODE, setAPICODE] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/getCode`, {
      method: 'GET',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setAPICODE(data.data));
  }, []);
  return (
    <div>
      <div className="border-t-4 border-[#15133c] max-w-screen-2xl m-auto"></div>
      <div className="flex justify-end gap-10 mt-5 pb-36 mr-10">
        <div className="Privacy">{APICODE.api_code}</div>
      </div>
    </div>
  );
};

export default Footer;
