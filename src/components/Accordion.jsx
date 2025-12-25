import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

function AccordionItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="border-b-3 border-black w-full">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-4 sm:py-5 md:py-6 px-4 sm:px-6 text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
                <span className="font-normal text-sm sm:text-base md:text-lg pr-4">
                    {question}
                </span>
                <IoChevronDown
                    className={`text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 md:pb-6 text-xs sm:text-sm md:text-base text-gray-700">
                    {answer}
                </div>
            </div>
        </div>
    );
}

function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: "É seguro conectar meu WhatsApp e redes sociais à plataforma?",
            answer: "Sim, é totalmente seguro. Utilizamos criptografia de ponta a ponta e seguimos os mais altos padrões de segurança da indústria para proteger suas informações e as de seus clientes. Todas as conexões são autenticadas e seus dados nunca são compartilhados com terceiros."
        },
        {
            question: "Preciso de conhecimento técnico ou saber programar?",
            answer: "Não! A Bearer foi desenvolvida para ser intuitiva e fácil de usar. Nossa interface é amigável e qualquer pessoa pode configurar automações sem precisar escrever uma linha de código. Além disso, oferecemos suporte completo e materiais de treinamento para ajudá-lo em cada etapa."
        },
        {
            question: "Qual a diferença entre os planos Assistir e Enterprise?",
            answer: "O plano Assistir é ideal para pequenas e médias empresas, oferecendo automações básicas e suporte padrão. Já o plano Enterprise é voltado para grandes organizações, com recursos avançados, integrações personalizadas, suporte prioritário 24/7 e um gerente de conta dedicado para garantir o máximo aproveitamento da plataforma."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-[50rem] mx-auto px-4 sm:px-6">
            <div className="border-3 border-black bg-white">
                {faqItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Accordion;
