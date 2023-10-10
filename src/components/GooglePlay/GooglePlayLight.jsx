import React from 'react'
import { FaGoogle } from 'react-icons/fa'; // Import the Apple icon from react-icons
function GooglePlayLight() {
  return (
    <div className="border border-[grey] rounded-lg px-6 py-4 inline-flex items-center text-[white] hover:border-[white]">
      {/* Apple icon on the left */}
      <div className="mr-4">
        <FaGoogle size={42} color='#E41D74' />
      </div>
      
      {/* Text to the right */}
      <div className='text-left'>
        <p>Get it on</p>
        <p className='font-extrabold text-2xl'>Google Play</p>
      </div>
    </div>
  )
}

export default GooglePlayLight