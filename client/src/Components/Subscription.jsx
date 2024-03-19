import React from 'react';
import './Subscription';
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <div className="flex justify-between mx-20 h-96 mt-32">
      <div className="left-part">
        <div className="h-para text-5xl font-semibold">Create Your Perfect Ring</div>
        <div className="s-para mt-5 text-xl">Try our new 3d customization feature</div>
      </div>
      <div className="right-part flex gap-7">
        <Link to="/customization">
          <button className="btn">Customize Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Subscription;
