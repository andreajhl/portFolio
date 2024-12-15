import Footer from '@components/footer';
import Navigation from '@components/navigation';
import '@styles/globals.scss';

export const metadata = {
  title: 'Andrea Hernandez',
  description: 'Front End Developer',
  authors: [{ name: 'Andrea Hernandez' }],
  keywords: ['front end', 'devloper', 'software engineer', 'react', 'nextjs'],
};

const RootLayout = ({ children }) => (
  <html lang='es'>
    <body>
      <Navigation />
        {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
