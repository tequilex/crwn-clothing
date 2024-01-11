import SignUpForm from "../../components/signUp-form/signUp-form.component";
import SignInForm from "../../components/signIn-form/signIn-form.component"

import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
