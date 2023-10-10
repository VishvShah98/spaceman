import React from "react";
import Phone from "./Phone";

function PhoneScreenshots(props) {
  const images = props.images;
  return (
    <div>
      <div className="flex justify-center items-center bg-transparent md:space-x-2 lg:space-x-12 p-10 ">
        {/* Show medium phones for large screens */}
        <div className="lg:block hidden md:hidden sm:hidden pb-20">
          <Phone type="medium" backgroundImage={images[0]} />
        </div>
        <div className="lg:block hidden md:hidden sm:hidden">
          <Phone type="medium" backgroundImage={images[1]} />
        </div>
        <div className="lg:block hidden md:hidden sm:hidden pt-20">
          <Phone type="medium" backgroundImage={images[2]} />
        </div>
        {/* Show small phones for medium screens */}
        <div className="lg:hidden hidden md:block sm:hidden pb-20">
          <Phone type="small" backgroundImage={images[0]} />
        </div>
        <div className="lg:hidden hidden md:block sm:hidden">
          <Phone type="small" backgroundImage={images[1]} />
        </div>
        <div className="lg:hidden hidden md:block sm:hidden pt-20">
          <Phone type="small" backgroundImage={images[2]} />
        </div>
        {/* Show one medium phone for smaller screens */}

        <div className="lg:hidden block md:hidden sm:block">
          <Phone type="medium" backgroundImage={images[1]} />
        </div>
      </div>
    </div>
  );
}
export default PhoneScreenshots;
