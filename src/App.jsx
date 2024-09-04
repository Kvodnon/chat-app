import React from 'react';
import Chat from './components/Chat';
import ConnectionForm from './components/ConnectionForm/ConnectionForm';

function App() {
  return (
    <div className="bg-[url('./assets/bg.jpg')] bg-cover flex flex-col h-screen w-screen p-8 bg-black">
      <ConnectionForm />
      <div className="flex-grow">
        <Chat />
      </div>
    </div>
  );
}

export default App;
