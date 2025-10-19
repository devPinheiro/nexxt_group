import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SubsidiariesPage } from './components/SubsidiariesPage';
import { ServicesPage } from './components/ServicesPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import { SEOProvider } from './components/SEO/SEOProvider';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'subsidiaries':
        return <SubsidiariesPage />;
      case 'services':
        return <ServicesPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <SEOProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </SEOProvider>
  );
}
