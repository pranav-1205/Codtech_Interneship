import { useEffect, useRef } from "react";
import Quill from "quill";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import socket from "../sockets/socket";
import "quill/dist/quill.snow.css";

export default function Editor({ noteId }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const isRemote = useRef(false);

  useEffect(() => {
    if (quillRef.current) return; // 🚨 PREVENT DOUBLE INIT

    const ydoc = new Y.Doc();
    const ytext = ydoc.getText("quill");

    const quill = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "code-block"],
          ["clean"]
        ]
      },
      placeholder: "Start collaborating..."
    });

    quillRef.current = quill;

    new QuillBinding(ytext, quill);

    socket.emit("join-note", noteId);

    socket.on("sync", (update) => {
      isRemote.current = true;
      Y.applyUpdate(ydoc, new Uint8Array(update));
      isRemote.current = false;
    });

    socket.on("update", (update) => {
      isRemote.current = true;
      Y.applyUpdate(ydoc, new Uint8Array(update));
      isRemote.current = false;
    });

    ydoc.on("update", (update) => {
      if (!isRemote.current) {
        socket.emit("update", update);
      }
    });

    return () => {
      socket.off("sync");
      socket.off("update");
      ydoc.destroy();
    };
  }, [noteId]);

  return <div ref={editorRef} style={{ flex: 1 }} />;
}
