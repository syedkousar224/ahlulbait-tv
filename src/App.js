import { useState } from 'react';
import './App.css';
import VideoCard from './components/VideoCard';
import VideosPage from './components/VideosPage';
import TabBar from './components/TabBar';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-background">
      <header className="glass-nav">
        <h1 className="logo">Ahlulbait Tv             بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <TabBar />

      {page === 'home' && (
        <VideoCard onExploreClick={() => setPage('videos')} />
      )}

      {page === 'videos' && (
        <VideosPage onBack={() => setPage('home')} />
      )}

      <footer className="glass-footer">
        <p>&copy; Syed Kousar</p>
      </footer>
    </div>
  );
}

export default App;