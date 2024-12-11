
import './App.css'
import Web3Provider from "./context/Web3Provider.jsx";;
import Routes from "./routes/Routes.jsx";
import {RouterProvider} from "react-router-dom";


function App() {

  return (
    <>
        <Web3Provider>
            <RouterProvider router={Routes} />
        </Web3Provider>
    </>
  )
}

export default App
