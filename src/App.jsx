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
        href="https://disk.yandex.ru/d/VRiqar8z6po4lg"
        download
        className="download-btn"
        onClick={handleDownload}
        downloand=""
      >
        Перейти файл
      </a>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
