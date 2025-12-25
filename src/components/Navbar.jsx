import { LuExternalLink } from "react-icons/lu";

function Navbar() {
    return (
        <>
            <nav className="navbar border border-b-3 border-b-black flex flex-col justify-center items-center">
                <div className="navbar-container border-b-3 border-b-black flex flex-row gap-2 items-center justify-center w-full py-3 sm:py-4">
                    <img src="src/assets/bearerMinimal.svg" className="w-5 h-5 sm:w-6 sm:h-6" />
                    <strong className="text-base sm:text-lg" style={{fontWeight: 750}}>bearer</strong>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-left justify-center md:justify-start w-full">
                    <ul className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-40 w-full md:w-[80%] justify-center items-center text-center md:text-left py-4 sm:py-3 md:py-2 px-2 text-sm sm:text-base" style={{fontWeight: 650}}>
                        <li><a href="/features" style={{transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff353a'} onMouseLeave={(e) => e.target.style.color = 'inherit'} className="flex flex-row items-center justify-center gap-1">Whatsapp<LuExternalLink /></a></li>
                        <li><a href="https://www.instagram.com/bearer.io/" target="_blank" rel="noopener noreferrer" style={{transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff353a'} onMouseLeave={(e) => e.target.style.color = 'inherit'} className="flex flex-row items-center justify-center gap-1">Instagram<LuExternalLink /></a></li>
                        <li><a href="/about" style={{transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff353a'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Marketing</a></li>
                        <li><a href="/contact" style={{transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff353a'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Planos</a></li>
                        <li><a href="/contact" style={{transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff353a'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Fale conosco</a></li>
                    </ul>
                    <a className="flex flex-1 w-full md:w-auto" href="/features">
                        <div className="bg-bearer-red hover:bg-[#e02f34] transition-colors duration-200 w-full h-full flex justify-center items-center border-l-0 md:border-l-3 border-l-black border-t-3 md:border-t-0 border-t-black">
                            <p style={{fontWeight: 650, padding: '0.75rem'}} className="text-white">Acessar plataforma</p>
                        </div>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;