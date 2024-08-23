import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
    <div>
      <h3>ktiptv-2.0-arm64-v8a</h3>
      <a
        href="https://online.kt.kg/api/client-update?platform=android&arch=arm64-v8a"
        className="download-btn"
        target='_blank'
      >
        Перейти к загрузке
      </a>
    </div>
    <div>
      <h3>ktiptv-2.0-v7a</h3>
      <a
        href="https://online.kt.kg/api/client-update?platform=android&arch=armeabi-v7a"
        className="download-btn"
        target='_blank'
      >
        Перейти к загрузке
      </a>
    </div>
    </>
  );
}

export default App;

