import AuthContent from '../components/Auth/AuthContent';
import { useState, useContext } from 'react';
import { login } from '../util/auth';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Login failed", "Could not log you in, please check your email / password combinations")
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Login in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
