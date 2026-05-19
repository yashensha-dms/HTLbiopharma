import { useEffect } from 'react';

const useSEO = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = `${title} | HTL BioPharma`;
    }

    // Helper to find or create standard meta tag
    const updateMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to find or create Open Graph meta tag
    const updateOGMeta = (property, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // 3. Open Graph Tags
    updateOGMeta('og:title', title ? `${title} | HTL BioPharma` : 'HTL BioPharma');
    updateOGMeta('og:description', description);
    updateOGMeta('og:url', window.location.href);

    // 4. Twitter Tags
    updateMeta('twitter:title', title ? `${title} | HTL BioPharma` : 'HTL BioPharma');
    updateMeta('twitter:description', description);

    // 5. Canonical Link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical]);
};

export default useSEO;
