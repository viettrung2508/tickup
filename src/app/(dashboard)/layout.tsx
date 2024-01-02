import React, { PropsWithChildren } from 'react';

type Props = {}

const DashboardLayout: React.FC<PropsWithChildren> = ({children}) => {

  return <main className='w-full h-screen flex items-center justify center'>{children}</main>;
};

export default DashboardLayout;