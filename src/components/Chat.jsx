import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

const Chat = () => {
  const messages = [
    { id: 1, text: 'Hello from server', type: 'received' },
    { id: 2, text: 'Hello from client', type: 'sent' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Контейнер сообщений */}
      <div className="flex-grow flex flex-col-reverse overflow-y-auto">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} type={message.type} />
        ))}
      </div>
      {/* Поле ввода сообщения */}
      <MessageInput />
    </div>
  );
};

export default Chat;
