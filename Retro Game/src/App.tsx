import { useState } from 'react';
import ArcadeHub from './components/ArcadeHub';
import CyberSnake from './components/games/CyberSnake';
import GlassBlocks from './components/games/GlassBlocks';
import NeonDuel from './components/games/NeonDuel';
import CosmicArkanoid from './components/games/CosmicArkanoid';
import SkyGlide from './components/games/SkyGlide';
import PixelGalaxy from './components/games/PixelGalaxy';
import NeonMaze from './components/games/NeonMaze';
import SoftSky from './components/games/SoftSky';
import Neo2048 from './components/games/Neo2048';
import NatureCrossing from './components/games/NatureCrossing';
import CubeArena from './components/games/CubeArena';
import NeonRush from './components/games/NeonRush';
import HoloGrid from './components/games/HoloGrid';
import RetroPinball from './components/games/RetroPinball';
import BrickGameMix from './components/games/BrickGameMix';
import AstroBlaster from './components/games/AstroBlaster';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('hub');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'hub':
        return <ArcadeHub onGameSelect={setCurrentScreen} />;
      case 'snake':
        return <CyberSnake onBack={() => setCurrentScreen('hub')} />;
      case 'tetris':
        return <GlassBlocks onBack={() => setCurrentScreen('hub')} />;
      case 'pong':
        return <NeonDuel onBack={() => setCurrentScreen('hub')} />;
      case 'arkanoid':
        return <CosmicArkanoid onBack={() => setCurrentScreen('hub')} />;
      case 'flappy':
        return <SkyGlide onBack={() => setCurrentScreen('hub')} />;
      case 'invaders':
        return <PixelGalaxy onBack={() => setCurrentScreen('hub')} />;
      case 'pacman':
        return <NeonMaze onBack={() => setCurrentScreen('hub')} />;
      case 'doodle':
        return <SoftSky onBack={() => setCurrentScreen('hub')} />;
      case '2048':
        return <Neo2048 onBack={() => setCurrentScreen('hub')} />;
      case 'frogger':
        return <NatureCrossing onBack={() => setCurrentScreen('hub')} />;
      case 'bomberman':
        return <CubeArena onBack={() => setCurrentScreen('hub')} />;
      case 'runner':
        return <NeonRush onBack={() => setCurrentScreen('hub')} />;
      case 'minesweeper':
        return <HoloGrid onBack={() => setCurrentScreen('hub')} />;
      case 'pinball':
        return <RetroPinball onBack={() => setCurrentScreen('hub')} />;
      case 'brickgame':
        return <BrickGameMix onBack={() => setCurrentScreen('hub')} />;
      case 'shooter':
        return <AstroBlaster onBack={() => setCurrentScreen('hub')} />;
      default:
        return <ArcadeHub onGameSelect={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] overflow-hidden">
      {renderScreen()}
    </div>
  );
}
