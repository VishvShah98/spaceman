import React from 'react';
import { FaApple } from 'react-icons/fa'; // Import the Apple icon from react-icons

function AppStoreLight() {
  return (
    <div className="border border-[grey] rounded-lg px-6 py-4 inline-flex items-center text-[white] hover:border-[white]">
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

export default AppStoreLight;
