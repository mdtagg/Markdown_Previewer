import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import "./App.css"
import { useState } from "react"

function App() {

    const [markup, setMarkup] = useState('')

    return (
      <>
        <Editor
            setMarkup={setMarkup}
        />
        <Previewer
            markup={markup}
        />
      </>
    )
  }
  
  export default App
  