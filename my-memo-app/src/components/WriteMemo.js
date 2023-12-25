import React, { useState } from "react";

const WriteMemo = ({ selectedMemo, onAdd, onEdit, onRemove }) => {
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
      />
      {selectedMemo && (
        <button onClick={handleWrite} className="memo-button">
          保存
        </button>
      )}
      {selectedMemo && (
        <button onClick={handleRemove} className="memo-button">
          削除
        </button>
      )}
    </div>
  );
};

export default WriteMemo;
