import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/signUp-form/signUp-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="">
      <h1>Sign page</h1>
      <button onClick={logGoogleUser}>signIn with popUp</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
