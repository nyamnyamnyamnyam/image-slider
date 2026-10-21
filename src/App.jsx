import { useState } from 'react';
import { imagesArr } from './data';
import Header from './components/Header';
import Photo from './components/Photo';
import Controls from './components/Control';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="gallery">
      <Header current={currentIndex + 1} total={imagesArr.length} />
      <Photo imageUrl={imagesArr[currentIndex]} />
      <Controls setCurrentIndex={setCurrentIndex} total={imagesArr.length} />
    </main>
  );
}

export default App;
