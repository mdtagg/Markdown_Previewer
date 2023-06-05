import "./Previewer.css"

interface PreviewerProps {
    markup:string
}

const Previewer = (props:PreviewerProps) => {

    const { markup } = props

    return (
        <div className="preview-container">
            <div
                className="preview-header"
            >
                <p>Previewer</p>
                <button>X</button>
            </div>
            <p id="preview">
              {markup}
            </p>
        </div>
        
    )
}

export default Previewer