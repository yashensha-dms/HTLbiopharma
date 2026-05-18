import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import ContactForm from '../UI/ContactForm';
import ScrollToTopButton from '../UI/ScrollToTopButton';
import { FormProvider, useForm } from '../../context/FormContext';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LayoutContent = ({ children }) => {
  const { isContactOpen, closeContact } = useForm();
  const { pathname } = useLocation();
  
  // Initialize Lenis
  useSmoothScroll();

  useEffect(() => {
    // Ensure scroll to top on route change
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Recalculate ScrollTrigger triggers for the new page layout
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(refreshTimer);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ContactForm isOpen={isContactOpen} onClose={closeContact} />
      <ScrollToTopButton />
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <FormProvider>
      <LayoutContent>{children}</LayoutContent>
    </FormProvider>
  );
};

export default Layout;
