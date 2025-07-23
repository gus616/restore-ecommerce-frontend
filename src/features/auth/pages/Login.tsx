import LoginForm from '../components/LoginForm'
import LoginHeader from '../components/LoginHeader'
import Separator from '../../../components/ui/Separator'
import LoginTerms from '../components/LoginTerms'
import LoginBusinessAccountMessage from '../components/LoginBusinessAccountMessage'
import LoginFooter from '../components/LoginFooter'
import loginImg from "../../../assets/login-logo.png"
import LoginPasswordForm from '../components/LoginPasswordForm'
import { useState } from 'react'
const Login = () => {
  const [authenticator, setAuthenticator] = useState<string | null>(null);

  return (
    <div className="w-full h-screen">
      <img src={loginImg} alt="Login" className="w-[150px] h-[150px] object-contain mx-auto my-0" />
      {
        !authenticator ? (
          <div className="max-w-xs mx-auto bg-white p-6 rounded-lg shadow-md mt-2 border border-gray-300">
            <LoginHeader />
            <LoginForm onSubmit={setAuthenticator} />
            <LoginTerms />
            <Separator />

            <LoginBusinessAccountMessage />
          </div>) : (
          <div className="max-w-xs mx-auto bg-white p-6 rounded-lg shadow-md mt-2 border border-gray-300">
            <LoginPasswordForm  authenticator={authenticator} onChangeAuthenticator={() => {
              setAuthenticator(null);
            }}/>
            <Separator />
          </div>)}
      <div className="mt-30">
        <Separator />
        <LoginFooter />
      </div>
    </div>

  )
}

export default Login