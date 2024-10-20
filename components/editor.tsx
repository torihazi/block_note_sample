import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

const Editor = () => {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
};

export default Editor;
