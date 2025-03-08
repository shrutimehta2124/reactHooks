import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component: videpPlayer
const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    togglePlay: () => {
      if (videoRef.current.paused) videoRef.current.play();
      else videoRef.current.pause();
    },
  }));

  return <audio ref={videoRef} src="/shared-assets/videos/flower.mp4" />; videoRef
});

// Parent component
function Example4() {
  const playerRef = useRef();

  return (
    <div>
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
      <button onClick={() => playerRef.current.togglePlay()}>Toggle Play</button>
      <VideoPlayer ref={playerRef} />
    </div>
  );
}

export default Example4