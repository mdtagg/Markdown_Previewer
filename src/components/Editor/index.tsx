import "./Editor.css"

const Editor = () => {

    return (
        <div className="editor-container">
            <div className="editor-header">
                <p>Editor</p>
                <button>X</button>
            </div>
            <textarea 
                id="editor"
            >
            </textarea>
        </div>
    )
}

export default Editor