import SignUpForm from "../../components/signUp-form/signUp-form.component";
import SignInForm from "../../components/signIn-form/signIn-form.component"

import './authentication.styles.scss'

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
