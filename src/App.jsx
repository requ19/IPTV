import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleDownload = () => {
    setMessage('Файл начинает скачиваться...');
    setTimeout(() => {
      setMessage(''); // Очистка сообщения через 3 секунды
    }, 3000);
  };

  return (
    <div>
      <a
        href="apk/ktiptv-2.0-armeabi-v7a.apk"
        download
        className="download-btn"
        onClick={handleDownload}
        downloand=""
      >
        Скачать файл
      </a>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
