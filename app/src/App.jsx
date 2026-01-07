import { useRef, useState } from "react";

export default function App() {
  const videoRef = useRef(null);

  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videos.length) % videos.length
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Video Player Using useRef</h2>

      <video
        ref={videoRef}
        width="400"
        src={videos[currentVideoIndex]}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleForward}>Forward 5s</button>
        <button onClick={handleRewind}>Rewind 5s</button>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}