import { useState } from 'react'

import './App.css'

import {useSelector} from "react-redux"
import Navbar from "./componut/Navbar"

import { Outlet } from 'react-router'
function App() {
  const [count, setCount] = useState(0)

  const authStatus =useSelector(state => state.auth.status)
   console.log(authStatus);

  return (
<div>
<Navbar />
<main>
<Outlet/>
</main>
  {/* <Footer /> */}
</div>
  )
}

export default App
