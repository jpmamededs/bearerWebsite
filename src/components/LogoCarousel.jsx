const LogoCarousel = ({ logos }) => {
  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 3s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
      
      {/* Fade nas bordas esquerda e direita */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll">
        {/* Triplicamos os logos para garantir loop infinito suave */}
        {[...Array(3)].map((_, setIndex) => (
          logos.map((item, index) => (
            <div 
              key={`set-${setIndex}-${index}`}
              className="flex flex-col items-center justify-center gap-3 mx-4 md:mx-6 lg:mx-8 flex-shrink-0"
            >
              {item.logo ? (
                <>
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center p-2">
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-center whitespace-nowrap">{item.name}</p>
                </>
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <p className="text-base md:text-lg lg:text-xl font-bold text-gray-600 whitespace-nowrap">{item.name}</p>
                </div>
              )}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
