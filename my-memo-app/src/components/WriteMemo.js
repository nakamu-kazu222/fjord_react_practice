import React, { useState, useEffect } from 'react';

const WriteMemo = ({ selectedMemo, onAdd, onEdit, onRemove }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedMemo) {
      setText(selectedMemo.text);
    } else {
      setText('');
    }
  }, [selectedMemo]);

  const handleWrite = () => {
    if (text.trim() !== '') {
      if (selectedMemo) {
        onEdit(selectedMemo.id, text);
      } else{
        onAdd(text);
      }
      setText('');
    }
  };

  const handleRemove = () => {
    if (selectedMemo) {
      onRemove(selectedMemo.id);
      setText('');
    }
  };

  return (
    <div>
      <h2>{selectedMemo ? 'Edit Memo' : 'Add Memo'}</h2>
      <textarea
        rows={{ minHeight: '1000px' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write memo"
      />
      {selectedMemo && <button onClick={handleWrite}>Save</button>}
      {selectedMemo && <button onClick={handleRemove}>Remove Memo</button>}
    </div>
  );
};

export default WriteMemo;
