import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ApproachFlow.css';

gsap.registerPlugin(ScrollTrigger);

const ApproachFlow = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.task-card, .phase-title, .validation-sidebar, .handover-btn');
    
    elements.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: (i % 5) * 0.1
      });
    });

    const handleResizeOrLoad = () => {
      ScrollTrigger.refresh();
    };

    // Safe delayed refresh on mount to let all DOM elements settle
    const initTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    window.addEventListener('load', handleResizeOrLoad);
    window.addEventListener('resize', handleResizeOrLoad);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('load', handleResizeOrLoad);
      window.removeEventListener('resize', handleResizeOrLoad);
    };
  }, { scope: containerRef });

  return (
    <section className="approach-flow-section" ref={containerRef}>
      <div className="approach-container">
        <div className="flow-header">
          <h2>Our Process Flow</h2>
          <p>A systematic methodology ensuring precision from conception to handover.</p>
        </div>

        <div className="flow-grid">
          {/* Phase 1 */}
          <div className="phase-block">
            <h3 className="phase-title">Design & Engineering</h3>
            <div className="tasks-grid">
              <div className="task-card conceptual-design col-span-4">
                Conceptual Design
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="phase-block has-sidebar">
            <div className="validation-sidebar">VALIDATION</div>
            <div className="phase-content">
              <h3 className="phase-title">Implementation & Project Management</h3>
              
              <div className="tasks-grid">
                {/* Row 1 */}
                <div className="task-card accent-border col-span-3">3D Model & Detail Engineering</div>
                <div className="task-card accent-border">As Built</div>
                
                {/* Row 2 */}
                <div className="task-card">Procurement</div>
                <div className="task-card">Construction & Installation</div>
                <div className="task-card">Commissioning</div>
                <div className="task-card qualification-task">Qualification at Site</div>
                
                {/* Row 3 */}
                <div className="task-card" style={{ gridColumnStart: 2 }}>FAT</div>
                <div className="task-card">Integration</div>
                <div className="task-card qualification-task">Qualification Documentation</div>
                
                {/* Row 4 */}
                <div className="task-card wide-task col-span-4">Training & SOP</div>
                
                {/* Row 5 */}
                <div className="task-card wide-task col-span-4">ESH Management</div>
              </div>
            </div>
          </div>

          {/* Handover */}
          <div className="handover-block">
            <div className="handover-btn">HAND OVER</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachFlow;
