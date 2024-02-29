import React from 'react';
import Navigation from '../components/navigation'
import '../styles/globals.scss';

export const metadata = {
  title: 'Andrea Hernandez',
  description: 'Front End Developer',
  authors: [{ name: 'Andrea Hernandez' }],
  keywords: ['FrontEnd', 'Devloper', 'software Engineer']
}

const RootLayout = ({ children }) => (
  <html lang='es'>
    <body>
      <Navigation />
        {children}
    </body>
  </html>
);

export default RootLayout;
