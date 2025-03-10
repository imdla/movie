import React from "react";
import PropTypes from "prop-types";
import NoteEditor from "./NoteEditor";

function NoteCreateForm({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  onCancel,
}) {
  return (
    <div className="memo-create">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="title-input"
          />
        </div>
        <div className="form-group">
          <NoteEditor content={content} onUpdate={onContentChange} />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">
            저장
          </button>
          <button type="button" onClick={onCancel} className="cancel-button">
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

NoteCreateForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default NoteCreateForm;
