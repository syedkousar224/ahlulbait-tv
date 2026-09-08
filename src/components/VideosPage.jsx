import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

function VideosPage({ onBack }) {
  const videos = [
    { title: 'Video 1', src: '/videos/video1.mp4' },
    { title: 'Video 2', src: '/videos/video2.mp4' },
    { title: 'Video 3', src: '/videos/video3.mp4' },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  if (selectedVideo) {
    return (
      <VideoPlayer
        src={selectedVideo.src}
        title={selectedVideo.title}
        onBack={() => setSelectedVideo(null)}
      />
    );
  }

  return (
    <div className="videos-page">
      <button className="back-btn" onClick={onBack}>&larr; Back</button>
      <h2 className="videos-page-title">All Videos</h2>
      <div className="videos-list">
        {videos.map((video, index) => (
          <div
            className="video-list-item"
            key={index}
            onClick={() => setSelectedVideo(video)}
          >
            <span>{video.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosPage;