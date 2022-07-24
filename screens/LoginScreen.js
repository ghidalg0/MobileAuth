import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import { login } from '../util/auth';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from 'react-native';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Login failed", "Could not log you in, please check your email / password combinations")
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Login in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
