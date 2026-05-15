import React, { forwardRef } from 'react';

/**
 * Universal Section Layout component for HTL BioPharma site.
 * 
 * Features:
 * - Height: 100vh - 64px (navbar height)
 * - Padding: 80px left/right (via container-custom)
 * - Flex centering: Vertically centers content by default
 * - ForwardRef: Compatible with GSAP ScrollTrigger
 */
const SectionLayout = forwardRef(({ 
  children, 
  className = "", 
  containerClassName = "",
  id = "", 
  style = {},
  fullWidth = false 
}, ref) => {
  return (
    <section 
      ref={ref}
      id={id}
      style={style}
      className={`w-full min-h-[calc(100vh-64px)] flex flex-col justify-center overflow-hidden bg-white ${className}`}
    >
      <div className={`${fullWidth ? "w-full px-5 md:px-20" : "container-custom"} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
});

export default SectionLayout;
