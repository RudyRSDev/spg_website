import Navbar from "./components/Navbar"
import  './App.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const App = () => {
  return (
    <div className="app">
      <Navbar />
    </div>
  )
}

export default App
