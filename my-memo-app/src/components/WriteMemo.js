import React, { useState, useEffect } from "react";

const WriteMemo = ({ selectedMemo, onAdd, onEdit, onRemove }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (selectedMemo) {
      setText(selectedMemo.text);
    } else {
      setText("");
    }
  }, [selectedMemo]);

  const handleWrite = () => {
    if (text.trim() !== "") {
      if (selectedMemo) {
        onEdit(selectedMemo.id, text);
      } else {
        onAdd(text);
        setText("");
      }
    }
  };

  const handleRemove = () => {
    if (selectedMemo) {
      onRemove(selectedMemo.id);
      setText("");
    }
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
