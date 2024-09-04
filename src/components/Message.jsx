import classNames from "classnames";
import React from "react";

const Message = ({ text, type }) => {
  return (
    <div
      className={classNames(
        "flex p-3 bg-white/10 text-sm rounded-xl border w-full mt-3 min-h-[44px] max-w-[715px] justify-between break-words",
        {
          " text-white self-start": type === "received",
          " text-white self-end": type === "sent",
        }
      )}
    >
      {text}

      <button
        type="button"
        className="text-red-600 focus:outline-none"
        aria-label="Delete message"
      >
        Удалить
      </button>
    </div>
  );
};

export default Message;
