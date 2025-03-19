import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './templates/Home'
import MySessions from './templates/MySessions'
import ModalCase from './components/ModalCase'
import useToken from './store/useToken'
import sendLoginRequest from './services/auth/logIn.service'
import useUser from './store/useUser'

export default function App() {
  async function handleLogin() {
    let hashPass = useToken.getState().hashPassword;

    if(hashPass) {
      const response = await sendLoginRequest(hashPass);

      if(response) {
        useToken.setState({token: response.token});
        useUser.setState({
          userId: response.user.UserId,
          name: response.user.Name,
          login: response.user.Login,
          accessProfileId: response.user.AccessProfileId,
          statusId: response.user.StatusId
        });
      }
    }
  }

  handleLogin();

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