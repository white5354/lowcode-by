import EditorCenter from '../EditorCenter'
import EditorLeft from '../EditorLeft'
import EditorRight from '../EditorRight'
import './index.less'

function EditorLayout() {
  return (
    <div className="editor-layout">
      <div className="editor-layout-left">
        <EditorLeft />
      </div>
      <div className="editor-layout-center">
        <EditorCenter />
      </div>
      <div className="editor-layout-right">
        <EditorRight />
      </div>
    </div>
  )
}

export default EditorLayout
