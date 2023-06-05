import "./Editor.css"

interface EditorProps {
    setMarkup:React.Dispatch<React.SetStateAction<string>>
}

const Editor = (props:EditorProps) => {

    const { setMarkup } = props

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value 
        setMarkup(input)
    }

    return (
        <div className="editor-container">
            <div className="editor-header">
                <p>Editor</p>
                <button>X</button>
            </div>
            <textarea 
                id="editor"
                onChange={handleChange}
            >
            </textarea>
        </div>
    )
}

export default Editor