import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='flex'>
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
        <div>
          <h3>Зеркало - ktiptv-2.0-v7a</h3>
          <a
            href="https://disk.yandex.ru/d/bkHNfWWthwHwPg"
            className="download-btn"
            target='_blank'
          >
            Перейти к файлу
          </a>
        </div>
        <div>
            <h3>Зеркало - ktiptv-2.0-arm64-v8a</h3>
            <a
              href="https://disk.yandex.ru/d/DAJBLzyeAgLtsg"
              className="download-btn"
              target='_blank'
            >
              Перейти к файлу
            </a>
        </div>
        <div>
          <h2>Версия 2.1</h2>
            <h3>ktiptv-2.1-arm64-v7a</h3>
            <a
              href="https://disk.yandex.ru/d/G0Bv2ZqQ7W7weQ"
              className="download-btn"
              target='_blank'
            >
              Перейти к файлу
            </a>
        </div>
        <div>
          <h2>Версия 2.2</h2>
            <h3>ktiptv-2.2-arm64-v7a</h3>
            <a
              href="https://disk.yandex.ru/d/RMPpRNo-dn8Khg"
              className="download-btn"
              target='_blank'
            >
              Перейти к файлу
            </a>
        </div>
    </div>
  );
}

export default App;

