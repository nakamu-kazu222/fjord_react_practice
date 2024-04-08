import React, { useState } from "react";
import { useAuth } from "../App";

const WriteMemo = ({ selectedMemo, onAdd, onEdit, onRemove }) => {
  const { isLoggedIn } = useAuth();

  const [text, setText] = useState(selectedMemo?.text || "");

  const handleWrite = () => {
    if (text.trim() !== "") {
      onEdit(selectedMemo.id, text);
    }
  };

  const handleRemove = () => {
    onRemove(selectedMemo.id);
  };

  return (
    <div className="write-memo-container">
      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write memo"
        className="memo-textarea"
        readOnly={!isLoggedIn}
      />
      {selectedMemo && isLoggedIn && (
        <button onClick={handleWrite} className="memo-button">
          保存
        </button>
      )}
      {selectedMemo && isLoggedIn && (
        <button onClick={handleRemove} className="memo-button">
          削除
        </button>
      )}
    </div>
  );
};

export default WriteMemo;
