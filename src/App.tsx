import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import "./App.css"
import { useState } from "react"
import { marked } from "marked"

function App() {

    marked.use({
        breaks:true
    })
    const [markup, setMarkup] = useState("# H1 element\n\n## H2 element\n\n`<div></div>`\n\n**Bold Text**\n\n[link](https://www.freecodecamp.org/learn/front-end-development-libraries/)\n\n    function() => {}\n\n- list item\n\n> Block Quote\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)")

    return (
      <>
        <Editor
            markup={markup}
            setMarkup={setMarkup}
        />
        <Previewer
            markup={markup}
        />
      </>
    )
  }
  
  export default App
  