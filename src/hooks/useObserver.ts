import React, { useEffect, useState } from 'react';

const useObserver = (ref: any) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const options = {
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
  }, []);

  return isIntersecting;
};

export default useObserver;
