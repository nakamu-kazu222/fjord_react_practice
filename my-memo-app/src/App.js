import React, { useState } from 'react';
import MemoList from './components/MemoList';
import WriteMemo from './components/WriteMemo';

const App = () => {
  const [memos, setMemos] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const handleNewMemo = () => {
    const newMemo = {
      id: idCounter,
      text: '新規メモ',
    };

    setMemos([...memos, newMemo]);
    setIdCounter(idCounter + 1);
    setSelectedMemo(newMemo);
  };


  const handleWriteMemo = (memoText) => {
    const newMemo = {
      id: idCounter,
      text: memoText,
    };

    setMemos([...memos, newMemo]);
    setIdCounter(idCounter + 1);
    setSelectedMemo(null);
  }

  const handleEditMemo = (editId, newText) => {
    const updatedMemos = memos.map((memo) => {
      if (memo.id === editId) {
        return { ...memo, text: newText };
      } else {
        return memo;
      }
    });
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  const handleRemoveMemo = (removeId) => {
    const updatedMemos = memos.filter((memo) => memo.id !== removeId);
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  return (
    <div>
      <button onClick={handleNewMemo}>+</button>
      <WriteMemo onAdd={handleWriteMemo} selectedMemo={selectedMemo} onEdit={handleEditMemo} onRemove={handleRemoveMemo} />
      <MemoList memos={memos} onEdit={setSelectedMemo} />
    </div>
  );
};

export default App;
