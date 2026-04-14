import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer w-fit select-none">
      {/* Icon Graphic */}
 

      {/* Text Brand */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-teal-400/10 rounded-xl blur-md group-hover:bg-teal-400/20 transition-all duration-500" />
        <span className="text-2xl font-extrabold tracking-tighter text-teal-400">
          Portfolio
        </span>
      </div>
    </div>
  );
};

export default Logo;