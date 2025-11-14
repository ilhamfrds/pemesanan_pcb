import React from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animate-section ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;