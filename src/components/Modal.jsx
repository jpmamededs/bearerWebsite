import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import subscribeService from '../services/subscribeService';

function Modal({ isOpen, onClose, planName, planPrice }) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setIsLoading(true);
            setError('');
            
            try {
                await subscribeService.subscribeEmail({ email });
                setIsSubmitted(true);
                setTimeout(() => {
                    handleClose();
                    setIsSubmitted(false);
                    setEmail('');
                }, 3000);
            } catch (err) {
                console.error('Erro ao enviar e-mail:', err);
                
                if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
                    setError('Erro de conexão com o servidor. Por favor, tente novamente mais tarde.');
                } else if (err.response?.status === 500) {
                    setError('Erro no servidor. Por favor, tente novamente.');
                } else {
                    setError('Erro ao enviar e-mail. Tente novamente.');
                }
            } finally {
                setIsLoading(false);
            }
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
                                {planPrice && (
                                    <div className="mb-3 flex flex-row gap-1 font-bold items-end justify-center">
                                        <p className="text-sm">R$</p>
                                        <p className="text-3xl text-bearer-red">{planPrice}</p>
                                        <p className="text-sm">/mês</p>
                                    </div>
                                )}
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
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-bearer-red focus:border-bearer-red transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {error && (
                                    <div className="text-red-600 text-sm font-semibold text-center">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-bearer-red text-white font-bold py-3 px-6 border-3 border-black hover:bg-[#e02f34] transition-colors duration-200 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Enviando...' : 'Receber instruções'}
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
