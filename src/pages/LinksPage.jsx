import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

function LinksPage() {
    const links = [
        {
            title: "Conheça nossos serviços",
            url: "https://sejabearer.com.br",
            icon: <FaGlobe className="text-xl" />
        },
        {
            title: "Fale com a gente no WhatsApp",
            url: "https://api.whatsapp.com/send/?phone=5511967921313&text&type=phone_number&app_absent=0&wame_ctl=1&source_surface=20",
            icon: <FaWhatsapp className="text-xl" />
        },
        {
            title: "Siga no Instagram",
            url: "https://instagram.com/sejabearer.com.br",
            icon: <FaInstagram className="text-xl" />
        },
        {
            title: "Conecte no LinkedIn",
            url: "https://www.linkedin.com/in/jpmamededs/",
            icon: <FaLinkedin className="text-xl" />
        },
        {
            title: "Envie um e-mail",
            url: "mailto:contato.bearer@gmail.com",
            icon: <FaEnvelope className="text-xl" />
        }
    ];

    return (
        <>
            <main className="min-h-screen bg-gradient-to-br from-[#ff353a] via-[#ff5f63] to-[#ff8b8d] overflow-x-hidden flex items-center justify-center">
                <div className="w-full max-w-[600px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
                        <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-6">
                            <img 
                                src="/bearerMinimal.svg" 
                                alt="Bearer Logo" 
                                className="w-full h-full object-contain"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
                            Bearer Automações
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/90 text-center px-4 max-w-md">
                            Automatize seus processos e impulsione seu negócio dando importância ao que realmente importa.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="bg-white hover:bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="text-[#ff353a]">
                                            {link.icon}
                                        </div>
                                        <span className="font-bold text-sm sm:text-base md:text-lg text-black">
                                            {link.title}
                                        </span>
                                    </div>
                                    <svg 
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff353a] group-hover:translate-x-1 transition-transform duration-200" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8 sm:mt-10 md:mt-12">
                        <p className="text-white/80 text-xs sm:text-sm">
                            © 2026 Bearer. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LinksPage;