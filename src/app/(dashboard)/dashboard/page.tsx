'use client'

import { useUser } from '@clerk/nextjs';
import { EmailAddress } from '@clerk/nextjs/server';
import React from 'react';

type Props = {}

const DashboardPage: React.FC = props => {
  const { user } =useUser();

  return <div>
    <h1 className='text-3xl'> 
    Dashboard Page
    <p className="text-base">{JSON.stringify({email: user?.emailAddresses , name: user?.fullName})}</p>
    {user?.imageUrl && <img width={50} src={user?.imageUrl} alt='User'/>}
    </h1>
  </div>;
};

export default DashboardPage;