// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   return (
//     <>
//     <div>
//       <h3>ktiptv-2.0-arm64-v8a</h3>
//       <a
//         href="https://disk.yandex.ru/d/DAJBLzyeAgLtsg"
//         className="download-btn"
//         target='_blank'
//       >
//         Перейти к файлу
//       </a>
//     </div>
//     <div>
//       <h3>ktiptv-2.0-v7a</h3>
//       <a
//         href="https://disk.yandex.ru/d/bkHNfWWthwHwPg"
//         className="download-btn"
//         target='_blank'
//       >
//         Перейти к файлу
//       </a>
//     </div>
//     </>
//   );
// }

// export default App;



import React from 'react';

function DownloadButton() {
  const triggerDownload = (fileName) => {
    const element = document.createElement('a');
    element.setAttribute('href', fileName);
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <button onClick={() => triggerDownload('../src/apk/ktiptv-2.0-arm64-v8a.apk')}>
      Скачать файл
    </button>
  );
}

export default DownloadButton;

