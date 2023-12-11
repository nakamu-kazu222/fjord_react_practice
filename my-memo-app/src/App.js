import React, { useState, useEffect } from "react";
import MemoList from "./components/MemoList";
import WriteMemo from "./components/WriteMemo";
import "./App.css";

const App = () => {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || [],
  );
  const [idCounter, setIdCounter] = useState(1);
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [showWriteMemo, setShowWriteMemo] = useState(false);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const handleNewMemo = () => {
    const newMemo = {
      id: idCounter,
      text: "新規メモ",
    };

    setMemos([...memos, newMemo]);
    setIdCounter(idCounter + 1);
    setSelectedMemo(newMemo);
    setShowWriteMemo(true);
  };

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
    setShowWriteMemo(false);
  };

  const handleRemoveMemo = (removeId) => {
    const updatedMemos = memos.filter((memo) => memo.id !== removeId);
    setMemos(updatedMemos);
    setSelectedMemo(null);
    setShowWriteMemo(false);
  };

  const handleMemoListClick = (clickedMemo) => {
    setSelectedMemo(clickedMemo);
    setShowWriteMemo(true);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h2>Memo App</h2>
      </div>
      <div className="main-container">
        <div className="memo-list-container">
          <MemoList memos={memos} onEdit={handleMemoListClick} />
          <button onClick={handleNewMemo} className="add-button">
            +
          </button>
        </div>
        <div>
          {showWriteMemo && (
            <WriteMemo
              onAdd={handleNewMemo}
              selectedMemo={selectedMemo}
              onEdit={handleEditMemo}
              onRemove={handleRemoveMemo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
