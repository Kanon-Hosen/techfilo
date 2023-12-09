import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";

import { useEditor, EditorContent } from "@tiptap/react";

function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl  p-6 w-full h-full border-2",
      },
    },
    content: "<p>Write Here...</p>",
  });
  return <EditorContent editor={editor} />;
}

export default TextEditor;
