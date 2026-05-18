import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SubPageHero from '../components/Sections/SubPageHero';
import './OurTeam.css';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const LinkedInIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M26.6667 0C27.5507 0 28.3986 0.351189 29.0237 0.976311C29.6488 1.60143 30 2.44928 30 3.33333V26.6667C30 27.5507 29.6488 28.3986 29.0237 29.0237C28.3986 29.6488 27.5507 30 26.6667 30H3.33333C2.44928 30 1.60143 29.6488 0.976311 29.0237C0.351189 28.3986 0 27.5507 0 26.6667V3.33333C0 2.44928 0.351189 1.60143 0.976311 0.976311C1.60143 0.351189 2.44928 0 3.33333 0H26.6667ZM25.8333 25.8333V17C25.8333 15.559 25.2609 14.177 24.2419 13.1581C23.223 12.1391 21.841 11.5667 20.4 11.5667C18.9833 11.5667 17.3333 12.4333 16.5333 13.7333V11.8833H11.8833V25.8333H16.5333V17.6167C16.5333 16.3333 17.5667 15.2833 18.85 15.2833C19.4688 15.2833 20.0623 15.5292 20.4999 15.9668C20.9375 16.4043 21.1833 16.9978 21.1833 17.6167V25.8333H25.8333ZM6.46667 9.26667C7.20927 9.26667 7.92146 8.97167 8.44657 8.44657C8.97167 7.92146 9.26667 7.20927 9.26667 6.46667C9.26667 4.91667 8.01667 3.65 6.46667 3.65C5.71964 3.65 5.00321 3.94675 4.47498 4.47498C3.94675 5.00321 3.65 5.71964 3.65 6.46667C3.65 8.01667 4.91667 9.26667 6.46667 9.26667ZM8.78333 25.8333V11.8833H4.16667V25.8333H8.78333Z" fill="currentColor"/>
  </svg>
);

const JoinModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(modalRef.current, 
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)', delay: 0.1 }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={onClose}>
      <div className="modal-content" ref={modalRef} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-inner">
          <h2 className="modal-title">Join Our <span className="red-text">Mission</span></h2>
          <p className="modal-desc">Tell us about yourself and we'll get in touch.</p>
          <form className="modal-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Position of Interest" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us a bit about your experience..." rows="4"></textarea>
            </div>
            <button type="submit" className="form-submit">SEND APPLICATION</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ name, role, image, linkedinUrl }) => {
  return (
    <div className="team-card group">
      <div className="team-card-image-wrapper">
        <img src={image} alt={name} className="team-card-image" />
        <div className="team-card-overlay"></div>
      </div>
      <div className="team-card-info">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="team-card-name">{name}</h3>
            <p className="team-card-role">{role}</p>
          </div>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <LinkedInIcon size={24} className="linkedin-icon" />
          </a>
        </div>
        <div className="team-card-accent"></div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const containerRef = useRef(null);
  const leadershipRef = useRef(null);
  const foundersRef = useRef(null);
  const ceoRef = useRef(null);
  const managementContainerRef = useRef(null);
  const managementTrackRef = useRef(null);

  const foundersData = [
    {
      name: "Lavinder Duggal",
      role: "Founder & MD at HTL",
      image: "/images/Teams picture/webp/LavinderDuggal.webp",
      linkedinUrl: "#"
    },
    {
      name: "Bhupinder Duggal",
      role: "President",
      image: "/images/Teams picture/webp/BhupinderDuggal.webp",
      linkedinUrl: "#"
    }
  ];

  const ceoData = {
    name: "Abhay Ranjan",
    role: "CEO",
    image: "/images/team%20new/Abhay%20Ranjan.webp",
    linkedinUrl: "#"
  };

  const managementData = [
    {
      name: "Balaji Madrewar",
      role: "Founder & MD at HTL",
      image: "/images/team%20new/Balaji.jpeg",
      linkedinUrl: "#"
    },
    {
      name: "Sachin Baraskar",
      role: "Founder & MD at HTL",
      image: "/images/team%20new/Sachin%20Baraskar.webp",
      linkedinUrl: "#"
    },
    {
      name: "Jay",
      role: "Founder & MD at HTL",
      image: "/images/team%20new/Jay%20Parekh.webp",
      linkedinUrl: "#"
    },
    {
      name: "Lalita",
      role: "Founder & MD at HTL",
      image: "/images/team%20new/Lalita%20Pilankar.webp",
      linkedinUrl: "#"
    },
  ];

  useGSAP(() => {
    // Leadership Section Animation
    const text = leadershipRef.current.querySelector('.leadership-text');
    gsap.fromTo(text, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Founders Grid Animation
    const founderCards = gsap.utils.toArray('.team-card', foundersRef.current);
    gsap.fromTo(founderCards, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: foundersRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // CEO Section Animation
    const ceoTextItems = gsap.utils.toArray('.ceo-narrative', ceoRef.current);
    const ceoCard = ceoRef.current.querySelector('.ceo-card-wrapper');
    const ceoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ceoRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    });

    ceoTl.fromTo(ceoTextItems, 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    ).fromTo(ceoCard, 
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Management Reveal Animation
    const mgtCards = gsap.utils.toArray('.team-card', managementContainerRef.current);
    
    gsap.fromTo(mgtCards, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: managementContainerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // CTA Section Animation
    const ctaItems = gsap.utils.toArray('.cta-content > *');
    gsap.fromTo(ctaItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.team-cta-section',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div className="team-page" ref={containerRef}>
      <SubPageHero 
        title="Our Team"
        subtitle="A glimpse into our work"
        backgroundImage="/images/banner/updated/Our%20Team.webp"
      />
      
      <section className="leadership-section" ref={leadershipRef}>
        <div className="container-custom h-full flex flex-col justify-center">
          <div className="leadership-content">
            <h4 className="leadership-label">LEADERSHIP</h4>
            <h2 className="leadership-text">
              HTL was founded on Mr. <span className="red-text">Lavinder Duggal's vision</span> of 
              an engineering-led organisation built on integrity and 
              long-term trust. Under Mr. <span className="red-text">Bhupinder Duggal's strategic leadership</span>, 
              it has grown into a future-ready company known for precision, 
              reliability, and a people-first culture that builds 
              enduring client relationships.
            </h2>
          </div>
        </div>
      </section>

      <section className="founders-section" ref={foundersRef}>
        <div className="container-custom h-full flex flex-col justify-center">
          <div className="founders-grid">
            {foundersData.map((founder, index) => (
              <TeamCard key={index} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="ceo-section" ref={ceoRef}>
        <div className="container-custom h-full flex items-center">
          <div className="ceo-layout">
            <div className="ceo-text-content">
              <p className="ceo-narrative">
                A transformation leader with over 35 years of global experience, Abhay drives strategy, growth, and operational excellence across Pharma, Biotech, and Cleanroom solutions.
              </p>
              <p className="ceo-narrative">
                He has engineered critical projects from concept to commercialisation across international markets.
              </p>
              <p className="ceo-narrative">
                As Vice Chairman of ISPE India, he actively champions innovation, compliance, and quality in advancing affordable healthcare infrastructure.
              </p>
            </div>
            <div className="ceo-card-wrapper">
              <TeamCard {...ceoData} />
            </div>
          </div>
        </div>
      </section>

      <section className="management-static-section" ref={managementContainerRef}>
        <div className="container-custom h-full flex flex-col justify-center">
          <div className="management-header">
            <h4 className="management-label">MANAGEMENT</h4>
            {/* <h2 className="management-heading">Strategic <span className="red-text">Execution</span> Team</h2> */}
          </div>
          <div className="management-grid">
            {managementData.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta-section">
        <div className="container-custom h-full flex flex-col justify-center items-center text-center">
          <div className="cta-content">
            <h2 className="cta-title">
              Grow your career with a team<br />
              that <span className="red-text">builds excellence</span>
            </h2>
            <p className="cta-subtitle">
              Be part of a workplace that values People, Collaboration, and Growth
            </p>
            <div className="cta-button-wrapper">
              <button onClick={() => setIsModalOpen(true)} className="cta-button">
                JOIN OUR TEAM
              </button>
            </div>
          </div>
        </div>
      </section>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default OurTeam;
