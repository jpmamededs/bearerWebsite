import { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-[90rem] mx-auto py-[1.5rem] sm:py-[2rem] md:py-[2.5rem] px-[0.5rem] sm:px-[1rem] gap-[0.5rem] sm:gap-[1rem] md:gap-[2rem]">
      {/* Botão Anterior */}
      <button 
        className="flex-shrink-0 w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-[#ff353a] hover:bg-[#e02f34] transition-colors duration-200 flex items-center justify-center text-white z-10 border-2 sm:border-3 border-black cursor-pointer" 
        onClick={prevSlide}
        aria-label="Anterior"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Wrapper do Carrossel */}
      <div className="flex-1 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full flex justify-center p-[0.25rem] sm:p-[0.5rem] md:p-[1rem]">
              <div className="w-full min-h-[auto] sm:min-h-[24rem] md:min-h-[28rem] bg-white border-2 sm:border-3 border-black flex flex-col md:flex-row overflow-hidden">
                {/* Imagem */}
                {item.image && (
                  <div className="w-full md:w-[45%] min-h-[12rem] sm:min-h-[16rem] md:min-h-[28rem] p-[0.75rem] sm:p-[1rem] md:p-[1.5rem] flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name || `Slide ${index + 1}`}
                      className="w-full h-full object-cover border-2 sm:border-3 border-black"
                    />
                  </div>
                )}
                
                {/* Conteúdo */}
                <div className="flex-1 p-[1.25rem] sm:p-[2rem] md:p-[2.5rem] lg:p-[4rem] flex flex-col justify-center">
                  <div className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-black mb-0 font-serif leading-none">"</div>
                  <p className="text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] text-black leading-relaxed mb-[1rem] sm:mb-[1.5rem] md:mb-[2rem]">
                    {item.description}
                  </p>
                  <div>
                    <p className="font-bold text-black text-[0.75rem] sm:text-[0.875rem]">{item.name}</p>
                    <p className="text-[0.625rem] sm:text-[0.75rem] text-gray-600">{item.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <button 
        className="flex-shrink-0 w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-[#ff353a] hover:bg-[#e02f34] transition-colors duration-200 flex items-center justify-center text-white z-10 border-2 sm:border-3 border-black cursor-pointer" 
        onClick={nextSlide}
        aria-label="Próximo"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
