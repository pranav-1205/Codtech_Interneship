import * as Y from "yjs";

const documents = new Map();

export default function setupYjs(io) {
  io.on("connection", (socket) => {
    console.log("🔗 User connected:", socket.id);

    socket.on("join-note", (noteId) => {
      socket.join(noteId);

      let ydoc = documents.get(noteId);
      if (!ydoc) {
        ydoc = new Y.Doc();
        documents.set(noteId, ydoc);
      }

      // Send initial document state
      const update = Y.encodeStateAsUpdate(ydoc);
      socket.emit("sync", update);

      socket.on("update", (update) => {
        // Ensure update is Uint8Array
        const uint8 = new Uint8Array(update);
        Y.applyUpdate(ydoc, uint8);

        // Broadcast safely
        socket.to(noteId).emit("update", uint8);
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
}
