function VideosPage({ onBack }) {
  const videos = ['speech', 'muharram', 'Tilawat'];

  return (
    <div className="videos-page">
      <button className="back-btn" onClick={onBack}>&larr; Back</button>
      <h2 className="videos-page-title">All Videos</h2>
      <div className="videos-list">
        {videos.map((video, index) => (
          <div className="video-list-item" key={index}>
            <span>{video}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosPage;