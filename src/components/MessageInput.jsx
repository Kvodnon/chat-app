import React from 'react';

const MessageInput = () => {
  return (
    <div className="flex items-center mt-4 rounded-xl bg-white/25 p-4">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow min-h-[45px]  appearance-none bg-white/25 rounded-lg  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="button"
        className="bg-primary  text-white font-bold min-w-[269px] min-h-[45px] ml-4 rounded focus:outline-none focus:shadow-outline"
      >
        Отправить
      </button>
    </div>
  );
};

export default MessageInput;
