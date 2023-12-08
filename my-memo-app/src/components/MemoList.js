import React from 'react';

const MemoList = ({ memos, onEdit }) => {
  const handleTitleClick = (memo) => {
    onEdit(memo);
  };

  return (
    <div>
      <h2>Memo List</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <span onClick={() => handleTitleClick(memo)} style={{ cursor: 'pointer' }}>
              {memo.text.split('\n')[0]}
            </span>
            {/* <button onClick={() => onEdit(memo)}>Edit</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;
