import { SignIn } from '@clerk/nextjs';
import React from 'react';

type Props = {}

const SignInPage: React.FC<Props> = props => {

  return <SignIn redirectUrl="/dashboard"/>;
};

export default SignInPage;