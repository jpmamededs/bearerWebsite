import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Sobre */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Bearer</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Sua solução completa para gestão e automação de processos empresariais.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-bearer-red transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-bearer-red transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-bearer-red transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-bearer-red transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Funcionalidades
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Planos
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Recursos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Recursos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Documentação
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    API
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Suporte
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-400 text-sm">
                                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-bearer-red" />
                                <span>contato@bearer.com</span>
                            </li>
                            <li className="flex items-start text-gray-400 text-sm">
                                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-bearer-red" />
                                <span>+55 (11) 9999-9999</span>
                            </li>
                            <li className="flex items-start text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-bearer-red" />
                                <span>São Paulo, SP - Brasil</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Bearer. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
