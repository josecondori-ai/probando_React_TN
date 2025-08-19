import { useState, useEffect } from 'react';
import imagen2 from '../assets/imagen2.png';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array con 5 imágenes (la misma imagen replicada)
  const images = [
    imagen2,
    imagen2,
    imagen2,
    imagen2,
    imagen2
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="image-slider-container" style={{
      backgroundColor: 'var(--bg-secondary)',
      padding: '2rem 0'
    }}>
      <div className="slider-wrapper" style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 'var(--shadow)'
      }}>
        {/* Imágenes */}
        <div className="slides-container" style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentSlide * 100}%)`
        }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                minWidth: '100%',
                height: '400px',
                position: 'relative'
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div className="slide-overlay" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                padding: '2rem 1rem 1rem',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Imagen {index + 1}
                </h3>
                <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>
                  Descripción de la imagen {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="slider-btn prev-btn"
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="slider-btn next-btn"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="indicators" style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px'
        }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
