import videoState from "../../state";

function Phone(props) {
  const { type, backgroundImage } = props;

  // Define the height based on the type prop
  let phoneHeight;
  let phoneWidth;
  if (type === "large") {
    phoneHeight = "700px";
    phoneWidth = "350px";
  } else if (type === "medium") {
    phoneHeight = "650px";
    phoneWidth = "325px";
  } else if (type === "small") {
    phoneHeight = "550px";
    phoneWidth = "275px";
  }

  const isVideo = [".mp4", ".webm", ".ogg"].some((ext) =>
    backgroundImage.endsWith(ext)
  );

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    // Close the menu when a menu item is clicked
  };

  return (
    <div
      className="bg-black rounded-[70px] p-4 shadow-[0px_0px_30px_15px_rgba(0,0,0,0.3)] border-[18px] border-[#ECF1FF] text-white relative "
      style={{ height: phoneHeight, width: phoneWidth }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 z-[1] ">
        <div className="bg-[#ECF1FF] h-[35px] w-24 rounded-[20px]"></div>
      </div>

      {/* Image/Video Inside the phone */}
      {isVideo ? (
        <div className="">
          {" "}
          <video
            src={backgroundImage}
            autoPlay
            loop
            muted
            className="object-cover object-center rounded-[52px] absolute inset-0 w-full h-full "
            onLoadedData={() => {
              videoState.isVideoLoaded = true;
            }}
          ></video>
          <div className="text-center absolute bottom-10 left-0 right-0 text-white uppercase">
            <div className="text-xl font-thin pt-4">
              <span>The</span>
            </div>
            <div className="text-3xl font-black">
              <span>Spaceman</span>
            </div>
            <div>
              <button
                id="getStartedButton"
                onClick={(e) => handleNavigation(e, "about")}
                style={{
                  background:
                    "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)",
                  transition: "background 0.5s ease-in-out",
                }}
                onMouseEnter={() =>
                  (document.getElementById(
                    "getStartedButton"
                  ).style.background = "#FF1493")
                }
                onMouseLeave={() =>
                  (document.getElementById(
                    "getStartedButton"
                  ).style.background =
                    "linear-gradient(130deg, rgb(182, 53, 156) 0%, rgb(239, 10, 106) 100%)")
                }
                className=" uppercase mt-12 text-xs px-16 py-4 rounded-3xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={backgroundImage}
          alt="Phone Background"
          className="object-cover object-center rounded-[52px] absolute inset-0 w-full h-full "
        />
      )}
    </div>
  );
}

export default Phone;
