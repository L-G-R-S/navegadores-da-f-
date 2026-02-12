import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { MissionVisionValues } from './sections/MissionVisionValues';
import { Identity } from './sections/Identity';
import { TeamCarousel } from './sections/TeamCarousel';
import { MusicPlayer } from './sections/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-nav-dark">
      <Navbar />
      <Hero />
      <Identity />
      <TeamCarousel />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
