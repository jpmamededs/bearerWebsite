import { LuArrowUp, LuMail } from "react-icons/lu";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-black border-t-3 border-black">
            <div className="w-full py-6 sm:py-8 px-4 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between border-b-3 border-black gap-4 sm:gap-0">
                <div className='flex flex-row gap-2 items-center'>
                    <img src='/bearerMinimal.svg' className="w-8 h-8 sm:w-10 sm:h-10" />
                    <p className='font-bold text-black text-2xl sm:text-3xl md:text-4xl'>bearer</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center font-bold cursor-pointer hover:text-[#ff353a] transition-colors duration-200 text-sm sm:text-base" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <p>Voltar ao topo</p>
                    <LuArrowUp className="text-xl sm:text-2xl"/>
                </div>
            </div>
            <div className="flex flex-col">
                <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-around py-8 sm:py-12 md:py-16 font-bold gap-4 sm:gap-2 md:gap-4 px-4 text-sm sm:text-base">
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Home</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Termos de privacidade</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Planos</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Fale conosco</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Ajuda</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Cadastre-se</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Parceiros</a></li>
                    <li className="cursor-pointer hover:text-[#ff353a] transition-colors duration-200"><a>Nosso FAQ</a></li>
                </ul>
                
                <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between px-6 md:px-12 py-8 gap-8">
                    {/* Newsletter Section */}
                    <div className="bg-[#ff353a] border-3 border-black p-6 md:p-8 max-w-sm w-full">
                        <h3 className="font-bold text-white text-base sm:text-lg mb-2 flex items-center gap-2 justify-center md:justify-start">
                            <LuMail className="text-lg sm:text-xl" />
                            Assine nossa Newsletter!
                        </h3>
                        <p className="text-white text-xs sm:text-sm mb-4 text-center md:text-left">Acompanhe nossos lançamentos, atualizações e novidades</p>
                        <div className="flex flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="digite seu email aqui" 
                                className="flex-1 px-3 sm:px-4 py-2 border-3 border-black bg-white text-xs sm:text-sm"
                            />
                            <button className="bg-white p-2 border-3 border-black cursor-pointer hover:bg-gray-100 transition-colors">
                                <LuArrowUp className="rotate-90 text-lg sm:text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Contact and Copyright Section */}
                    <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
                        <div className="flex flex-row items-center gap-2">
                            <FaInstagram />
                            <span className="text-sm">@bearer.io</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FaWhatsapp />
                            <span className="text-sm">+55 (11) 96792-1313</span>
                        </div>
                        <p className="text-sm font-bold mt-2">All rights reserved to bearer @{currentYear}</p>
                        <p className="text-xs font-bold text-bearer-red">Design por Ana Beatriz Micucci</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
