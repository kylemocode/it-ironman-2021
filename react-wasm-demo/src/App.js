import React, { useState, useEffect } from 'react';
import './App.css';

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
const ffmpegInstance = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState(null);
  const [gifResult, setGifResult] = useState(null);

  const loadModule = async () => {
    await ffmpegInstance.load();
    setReady(true);
  };

  const convertToGif = async () => {
    // Write the file to memory
    ffmpegInstance.FS('writeFile', 'test.mp4', await fetchFile(video));

    // Run the FFMpeg command
    await ffmpegInstance.run(
      '-i',
      'test.mp4',
      '-t',
      '2.5',
      '-ss',
      '2.0',
      '-f',
      'gif',
      'out.gif'
    );

    // Read the result
    const data = ffmpegInstance.FS('readFile', 'out.gif');

    // Create a URL
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/gif' })
    );
    setGifResult(url);
  };

  useEffect(() => {
    loadModule();
  }, []);

  return ready ? (
    <div className='App'>
      {video && (
        <video controls width='250' src={URL.createObjectURL(video)}></video>
      )}
      <input type='file' onChange={(e) => setVideo(e.target.files?.item(0))} />

      <h3>Result</h3>

      <button onClick={convertToGif}>Convert</button>

      {gifResult && <img src={gifResult} width='250' />}
    </div>
  ) : (
    <h2>Not Ready Yet...</h2>
  );
}

export default App;
