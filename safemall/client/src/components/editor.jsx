import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function EditorBox(editorRef) {
    return (
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="auto"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          hideModeSwitch= {true}
        />
    );
  }
  
  export default EditorBox;