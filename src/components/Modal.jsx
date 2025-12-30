import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

function Modal({ isOpen, onClose, planName }) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setIsSubmitted(true);
            setTimeout(() => {
                handleClose();
                setIsSubmitted(false);
                setEmail('');
            }, 3000);
        }
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-6 backdrop-blur-sm ${
                isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
            }`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            onClick={handleClose}
        >
            <div 
                className={`relative w-full max-w-md bg-white border-3 border-black shadow-2xl ${
                    isClosing ? 'animate-slideDown' : 'animate-slideUp'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botão de fechar */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 transition-colors duration-200 rounded-full cursor-pointer"
                    aria-label="Fechar modal"
                >
                    <IoMdClose className="text-2xl text-black" />
                </button>

                <div className="p-6 sm:p-8">
                    {!isSubmitted ? (
                        <>
                            {/* Cabeçalho */}
                            <div className="mb-6 text-center">
                                <div className="inline-block mb-4 p-3 bg-bearer-red rounded-full">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold mb-2">
                                    {planName ? `Assinar ${planName}` : 'Começar sua jornada'}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Digite seu e-mail para receber as instruções de pagamento
                                </p>
                            </div>

                            {/* Formulário */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-bold mb-2"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="seu.email@exemplo.com"
                                        required
                                        className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-bearer-red focus:border-bearer-red transition-all duration-200"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-bearer-red text-white font-bold py-3 px-6 border-3 border-black hover:bg-[#e02f34] transition-colors duration-200 cursor-pointer"
                                >
                                    Receber instruções
                                </button>
                            </form>

                            {/* Informação adicional */}
                            <p className="mt-4 text-xs text-center text-gray-500">
                                Ao prosseguir, você receberá um e-mail com todas as informações necessárias para completar sua assinatura.
                            </p>
                        </>
                    ) : (
                        /* Mensagem de sucesso */
                        <div className="text-center py-8 animate-fadeIn">
                            <div className="inline-block mb-4 p-3 bg-green-500 rounded-full">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">E-mail enviado com sucesso!</h3>
                            <p className="text-sm text-gray-600">
                                Verifique sua caixa de entrada em <strong>{email}</strong>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;
