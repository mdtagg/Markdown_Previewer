import "./index.css"
import { marked } from "marked"

interface PreviewerProps {
    markup:string
}

const Previewer = (props:PreviewerProps) => {

    const { markup } = props
    const newMarkup = marked.parse(markup)

    return (
        <div className="preview-container">
            <div
                className="header"
            >
                <p className="title">Previewer</p>
            </div>
            
            <div 
                id="preview"
                dangerouslySetInnerHTML={{__html:newMarkup}}
            >
            </div>
        </div>
        
    )
}

export default Previewer