import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './templates/Home'
import MySessions from './templates/MySessions'
import ModalCase from './components/ModalCase'

export default function App() {
  return (
    <Router>
      <ToastContainer position='top-right' autoClose={5000}/>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/MySessions" element={<MySessions />} />
      </Routes>
      <ModalCase />
    </Router>
  )
}