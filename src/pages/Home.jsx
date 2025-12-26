import PricingCard from "../components/PricingCard";
import { LuArrowUpRight } from "react-icons/lu";
import RedButton from "../components/RedButton";
import Flashcard from "../components/Flashcard";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

function Home() {
    return (
        <>

            <main className="overflow-x-hidden">
                <section className="max-w-full w-full min-h-[50vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-center md:justify-start border-b-3 border-b-black px-6 py-8 md:py-0 md:px-0 bg-gradient-to-r from-[#ff353a] to-[#ff8b8d] gap-3 md:gap-0">
                    <div className="w-full md:w-[30%] h-auto md:h-full flex flex-col gap-4 items-center md:items-start justify-center text-center md:text-left md:ml-40">
                        <div>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Automatize seus processos com a bearer.</h2>
                            <p className="text-base md:text-lg w-full md:w-[28rem]">faça parte desta jornada junto a empresas que confiam na gente</p>
                        </div>
                    </div>
                    <img src="/illustrations1.svg" className="!hidden md:!block md:mt-40 md:w-auto" style={{ height: 450, width: "auto" }} />
                </section>
                <section className='max-w-full w-full bg-white px-6 md:px-0 py-12 md:py-14 lg:py-20 mb-12 md:mb-14 lg:mb-20'>
                    <p className="text-lg font-bold text-center md:text-left mx-auto md:mx-0 md:ml-40 mb-8 md:mb-10 lg:mb-15">Nossos planos</p>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-8 md:gap-4">
                        <PricingCard />
                        <PricingCard />
                        <PricingCard />
                    </div>
                </section>
                <section className="min-h-[50vh] w-full border-t-3 border-b-3 py-8 md:py-12 lg:py-16 px-6 sm:px-8 md:px-12 lg:px-40 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #FF353A 0deg, rgba(255, 53, 58, 0.54) 90deg, rgba(255, 53, 58, 0.5) 180deg, rgba(255, 53, 58, 0.7) 270deg, #FF353A 360deg)' }}>
                    <div className="flex flex-col items-center md:items-start justify-start gap-6 md:gap-8 lg:gap-12 w-full lg:w-[50%] text-center md:text-left">
                        <div className="w-full h-full flex flex-col gap-3 sm:gap-4 items-center md:items-start justify-start">
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Quem somos nós?</h1>
                            <p className="text-xs sm:text-sm md:text-base w-full md:w-[95%] lg:w-[25rem]">Somos uma plataforma de automação criada para simplificar processos, organizar dados e potencializar vendas. Unimos tecnologia e estratégia para transformar atendimentos em experiências eficientes, humanas e escaláveis, ajudando negócios a crescerem com mais controle e menos esforço operacional.</p>
                        </div>
                        <a>
                            <div className="group flex flex-row gap-2 items-center justify-center w-full sm:w-auto md:w-[13rem] md:hover:w-[15rem] bg-white py-3 sm:py-4 px-4 font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-bearer-red hover:text-white" style={{ border: '3px solid black' }}>
                                Saiba mais <LuArrowUpRight className="text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:translate-x-6" />
                            </div>
                        </a>
                    </div>
                    <img src="/bearerAndImages.svg" className="!hidden xl:!block xl:w-auto" style={{ height: 380, width: "auto" }} />
                </section>
                <section className="max-w-full w-full min-h-[50vh] lg:min-h-[70vh] bg-white mt-4 sm:mt-8 md:mt-12 lg:mt-16 flex items-center justify-center px-6 sm:px-8 py-12 md:py-16 lg:py-0">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-12 max-w-[90rem]">
                        <div className="flex flex-col justify-start items-center lg:items-start gap-6 sm:gap-8">
                            <div className="flex flex-col items-center lg:items-start justify-start gap-3 sm:gap-4 text-center lg:text-left">
                                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl w-full lg:w-[20rem]">Por que investir na bearer?</h1>
                                <p className="text-xs sm:text-sm md:text-base w-full lg:w-[25rem]">Transformamos conversas em vendas. Centralizamos dados, automatizamos fluxos e apoiamos decisões que ajudam seu negócio a crescer de forma consistente.</p>
                            </div>
                            <RedButton text={"Começar já"} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
                            <Flashcard numero={1} titulo="Mais eficiência, menos esforço" descricao="Automatizamos tarefas repetitivas, organizamos seus fluxos e liberamos seu tempo para focar no crescimento do negócio." />
                            <Flashcard numero={2} titulo="Vendas mais inteligentes" descricao="Organizamos dados e conversas para gerar insights reais, ajudando você a tomar decisões melhores e vender com mais previsibilidade." />
                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col items-center py-10 sm:py-16 md:py-2 px-4 sm:px-6">
                    <img src="/triangleElements.svg" className="absolute top-8 left-4 md:left-20 w-12 h-12 md:w-16 md:h-16" alt="decoration" />
                    <img src="/star.svg" className="absolute bottom-8 right-4 md:right-20 w-16 h-16 md:w-20 md:h-20" alt="decoration" />
                    <p className="font-bold text-base sm:text-lg mb-6 sm:mb-8 md:mb-10">O que dizem nossos clientes?</p>
                    <Carousel items={[
                        {
                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                            description: "A Bearer transformou completamente nossa forma de fazer negócios. A automação nos ajudou a escalar nossos processos sem perder a qualidade no atendimento.",
                            name: "Sarah Azevedo",
                            company: "Empresa Y | Diretora de TI"
                        },
                        {
                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                            description: "Implementar a Bearer foi uma das melhores decisões que tomamos. O ROI veio muito mais rápido do que esperávamos e o suporte é excepcional.",
                            name: "Carlos Mendes",
                            company: "Tech Solutions | CEO"
                        },
                        {
                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                            description: "Nossa equipe economiza horas todos os dias com a automação da Bearer. Finalmente conseguimos focar no que realmente importa: nossos clientes.",
                            name: "Marina Silva",
                            company: "Vendas Plus | Gerente Comercial"
                        }
                    ]} />
                </section>
                <section className="relative flex flex-col items-center py-10 sm:py-16 md:py-10 md:pb-40 px-4 sm:px-6">
                    <p className="font-bold text-base sm:text-lg mb-6 sm:mb-8 md:mb-16">Perguntas frequentes</p>
                    <Accordion />
                    <img src="/squareElements.svg" className="absolute bottom-12 left-8 md:left-32 w-12 h-12 md:w-16 md:h-16 -z-10" alt="decoration" />
                </section>
                <Footer />
            </main>

        </>
    )
}

export default Home;