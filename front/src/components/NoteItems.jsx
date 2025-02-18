import PropTypes from "prop-types";

function NoteItems({ notes, onNoteClick }) {
  return (
    <div className="note-items">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note-item"
          onClick={() => onNoteClick(note.id)}
        >
          <div className="note-item-content">
            <h3>{note.title}</h3>
            <span className="note-date">
              {new Date(note.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

NoteItems.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onNoteClick: PropTypes.func.isRequired,
};

export default NoteItems;
