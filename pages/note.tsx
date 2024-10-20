import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/editor"), { ssr: false });

const Note = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default Note;
