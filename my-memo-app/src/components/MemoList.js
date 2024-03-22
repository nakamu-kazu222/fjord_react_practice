import React from "react";

const MemoList = ({ memos, onEdit }) => {
  const sortedMemos = memos.sort((a, b) => a.id - b.id);

  const handleTitleClick = (memo) => {
    onEdit(memo);
  };

  return (
    <div>
      <ul>
        {sortedMemos.map((memo) => (
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
