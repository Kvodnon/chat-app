import React from 'react';

const ConnectionForm = () => {
  // Статус подключения установлен статично
  const connectionStatus = 'Disconnected'; // Измените на 'Connected' для теста

  return (
    <div className="flex flex-col items-center bg-white/25 p-4 rounded-xl">
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Server Address"
          className="rounded-lg text-white bg-white/25 w-[639px] py-2 px-4 mr-4"
        />
        <div className="flex-grow flex items-center">
          <button
            type="button"
            className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Подключить
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Отключить
          </button>
        </div>
        {/* Статус подключения */}
        <div className="text-lg font-medium">
          <span className={`font-bold ${connectionStatus === 'Connected' ? 'text-green-500' : 'text-red-500'}`}>Статус {connectionStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default ConnectionForm;
