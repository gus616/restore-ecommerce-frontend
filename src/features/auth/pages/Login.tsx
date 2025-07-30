import LoginForm from '../components/LoginForm'
import LoginHeader from '../components/LoginHeader'
import Separator from '../../../components/ui/Separator'
import LoginTerms from '../components/LoginTerms'
import LoginBusinessAccountMessage from '../components/LoginBusinessAccountMessage'
import LoginFooter from '../components/LoginFooter'
import loginImg from "../../../assets/login-logo.png"
import LoginPasswordForm from '../components/LoginPasswordForm'
import { useState } from 'react'
import { useLoginMutation } from '../api/authApi'
import { useAppDispatch } from '../../../store/store'
import { setCredentials } from '../../../store/slices/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'
const Login = () => {
  const location = useLocation();
  const from = location.state?.from || '/';


  const dispatch = useAppDispatch();
  const [authenticator, setAuthenticator] = useState<string | null>(null);
  const navigate = useNavigate();
  const [login, { isLoading: isLogginIn }] = useLoginMutation({});

  const loginHandler = async (identifier: string, password: string) => {
    try {
      const loginResponse = await login({ identifier, password }).unwrap();
      const {userName, phoneNumber, email, token} = loginResponse;
      console.log("Login successful:", loginResponse);

      dispatch(setCredentials({ User: {
        userName,
        email,
        phoneNumber
      }, token: token || '' }));

      // Handle successful login (e.g., redirect to catalog page or checkout depending on where the user came from)      

      if(from === '/cart') {
         navigate('/checkout');
      } else {
        console.log("Redirecting to catalog from login");
      }

    }
    catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show a notification or alert)
    }
  }

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
            <LoginPasswordForm isLoading={isLogginIn} authenticator={authenticator} onChangeAuthenticator={() => {
              setAuthenticator(null);
            }} 
             onLogin={loginHandler}
            />
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