import React from "react";

const MemoList = ({ memos, onEdit }) => {
  const handleTitleClick = (memo) => {
    onEdit(memo);
  };

  return (
    <div>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <span
              onClick={() => handleTitleClick(memo)}
              style={{ cursor: "pointer" }}
            >
              {memo.text.split("\n")[0]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;
