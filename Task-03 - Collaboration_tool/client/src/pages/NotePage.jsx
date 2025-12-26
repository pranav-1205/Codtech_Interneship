import Editor from "../editor/Editor";

export default function NotePage() {
  return (
    <div className="app-container">
      <h2 style={{ marginBottom: "16px" }}>
        📝 Real-Time Collaborative Note
      </h2>

      <div className="editor-wrapper">
        <Editor noteId="shared-note-1" />
      </div>
    </div>
  );
}
