import "./Editor.css"
import { marked } from "marked"

interface EditorProps {
    markup:string
    setMarkup:React.Dispatch<React.SetStateAction<string>>
}

const Editor = (props:EditorProps) => {

    const { markup,setMarkup } = props

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = `${e.target.value}`
        const newMarkup = marked.parse(input)
        setMarkup(newMarkup)
    }

    return (
        <div className="editor-container">
            <div className="header">
                <p className="title">Editor</p>
            </div>
            <textarea 
                id="editor"
                onChange={handleChange}
                defaultValue={markup}
            >
            </textarea>
        </div>
    )
}

export default Editor