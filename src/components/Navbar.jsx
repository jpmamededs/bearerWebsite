function Navbar() {
    return (
        <nav className="bg-bearer-red shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-2xl font-bold text-white">My Website</h1>
                    <ul className="flex space-x-8">
                        <li>
                            <a href="#about" className="text-white hover:text-gray-200 font-medium transition-colors">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="text-white hover:text-gray-200 font-medium transition-colors">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-gray-200 font-medium transition-colors">
                                Contato
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-gray-200 font-medium transition-colors">
                                Seus dashboards
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;