import { SignUp } from '@clerk/nextjs';
import React from 'react';

type Props = {}

const SignUpPage: React.FC<Props> = props => {

  return <SignUp redirectUrl="/dashboard"/>;
};

export default SignUpPage;