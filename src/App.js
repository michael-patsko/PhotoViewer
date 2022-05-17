import './App.css';
import { PhotoViewer } from "./components/PhotoViewer/PhotoViewer";
import { PhotoList } from "./components/PhotoList/PhotoList";
import { useState } from 'react';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState("https://picsum.photos/id/600/1600/900.jpg");
  return (
    <div className="App">
      <div>
        <h1>React Photo Viewer</h1>
        <PhotoViewer selectedPhoto = {selectedPhoto}/>
      </div>
      <PhotoList setSelectedPhoto = {setSelectedPhoto}/>
    </div>
  );
}

export default App;