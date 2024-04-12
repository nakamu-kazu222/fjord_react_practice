import React, { useState, useEffect, createContext, useContext } from "react";
import MemoList from "./components/MemoList";
import WriteMemo from "./components/WriteMemo";
import LoginButton from "./components/LoginButton";
import "./App.css";

const AuthContext = createContext();

const App = () => {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || [],
  );
  const [idCounter, setIdCounter] = useState(
    parseInt(localStorage.getItem("idCounter")) || 1,
  );
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  };

  const handleEditMemo = (editId, newText) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === editId ? { ...memo, text: newText } : memo,
    );

    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  const handleRemoveMemo = (removeId) => {
    const updatedMemos = memos.filter((memo) => memo.id !== removeId);
    setMemos(updatedMemos);
    setSelectedMemo(null);
  };

  const handleMemoListClick = (clickedMemo) => {
    setSelectedMemo(clickedMemo);
  };

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <div className="app-container">
        <div className="header">
          <h2>Memo App</h2>
          <LoginButton />
        </div>
        <div className="main-container">
          <div className="memo-list-container">
            <MemoList memos={memos} onEdit={handleMemoListClick} />
            {isLoggedIn && (
              <button onClick={handleNewMemo} className="add-button">
                +
              </button>
            )}
          </div>
          <div>
            {selectedMemo && (
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
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default App;
