import './App.css';
import { PlayerControls } from './components/PlayerControls';
import { TrackList } from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';
import {useState} from "react"
import music1 from './assets/Music1.mp3'
import music2 from './assets/Music2.mp3'

function App() {

  const [state, setState] = useState ({
    audioPlayer: new Audio(music1), 
    tracks: [
      {
        name: "Track 1",
        file: music1,
      },
      {
        name: "Track 2",
        file: music2,
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })

  console.log("State: ", state);


  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
