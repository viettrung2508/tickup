'use client'

import { Button } from '@/shared/components/button';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {}

const HomeLoginButton: React.FC = (props) => {
    const router = useRouter()
  const navigateToLogin = () => {
    router.push('/login')
  }

  return <div>
     <Button size="sm" className="px-10 block" onClick={navigateToLogin}>
        Go to login page
      </Button>
  </div>;
};

export default HomeLoginButton;