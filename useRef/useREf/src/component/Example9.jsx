import { useRef } from "react";

function Example9() {
  // Create a reference to the video element using useRef
  const videoRef = useRef(null);

  return (
    <div>
      {/* Video element*/}
      <video ref={videoRef} width="300" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <button 
        onClick={() => videoRef.current.play()} 
      >
        Play
      </button>
      <button 
        onClick={() => videoRef.current.pause()}
      >
        Pause
      </button>
    </div>
  );
}

export default Example9;
