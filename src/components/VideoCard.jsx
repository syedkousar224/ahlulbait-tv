function VideoCard({ onExploreClick }) {
  return (
    <div className="video-card">
      <div className="video-card-shine"></div>
      <div className="video-card-content">
        <div className="video-logo">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="#7fffb0" strokeWidth="1.5"/>
            <path d="M10 9L15 12L10 15V9Z" fill="#7fffb0"/>
          </svg>
        </div>
        <h3 className="video-title">Videos</h3>
        <p className="video-subtitle">Watch and explore content</p>
        <button className="video-btn" onClick={onExploreClick}>Explore</button>
      </div>
    </div>
  );
}

export default VideoCard;
