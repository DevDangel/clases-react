// src/components/SeccionScroll.jsx
import React, { useEffect } from 'react';
import './SeccionScroll.css'; // Asegúrate de tener este archivo

export default function SeccionScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.group');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="admin group">Contenido Admin</div>
      <div className="desarrollo group">Contenido Desarrollo</div>
      <div className="beneficios group">Contenido Beneficios</div>
    </>
  );
}
