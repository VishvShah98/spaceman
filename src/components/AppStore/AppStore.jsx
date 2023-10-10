import React from 'react';
import { FaApple } from 'react-icons/fa'; // Import the Apple icon from react-icons

function AppStore() {
  return (
    <div className="border border-[#1D154B] rounded-lg px-6 py-4 inline-flex items-center text-[#1D154B] hover:border-[#E41D74]">
    {/* Apple icon on the left */}
    <div className="mr-4">
      <FaApple size={56} color='#E41D74' />
    </div>
    
    {/* Text to the right */}
    <div className='text-left'>
      <p>Download on the</p>
      <p className='font-extrabold text-2xl'>App Store</p>
    </div>
  </div>
  
  );
}

export default AppStore;
