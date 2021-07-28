import './App.css';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

function App() {
  return (
    <div className='App'>
      <div style={{ width: '500px' }}>
        <LiteYoutubeEmbed id='ZPBWje2kJ_U' mute={false} />
      </div>
    </div>
  );
}

export default App;
