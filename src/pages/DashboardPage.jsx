import { useState } from 'react';
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  ShoppingCart,
  Menu,
  X 
} from 'lucide-react';

function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'users', label: 'Usuários', icon: Users },
        { id: 'products', label: 'Produtos', icon: ShoppingCart },
        { id: 'reports', label: 'Relatórios', icon: FileText },
        { id: 'settings', label: 'Configurações', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64 bg-white border-r border-gray-200">
                    {/* Logo */}
                    <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
                        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                    </div>
                    
                    {/* Menu Navigation */}
                    <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeMenu === item.id;
                            
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveMenu(item.id)}
                                    className={`
                                        w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg
                                        transition-colors duration-150
                                        ${isActive 
                                            ? 'bg-blue-50 text-blue-600' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                >
                                    <Icon className="w-5 h-5 mr-3" />
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                    
                    {/* User Profile */}
                    <div className="flex items-center px-4 py-4 border-t border-gray-200">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                                JD
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">João Usuário</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Sidebar - Mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div 
                        className="fixed inset-0 bg-gray-600 bg-opacity-75"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        
                        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
                            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                        </div>
                        
                        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeMenu === item.id;
                                
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveMenu(item.id);
                                            setSidebarOpen(false);
                                        }}
                                        className={`
                                            w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg
                                            transition-colors duration-150
                                            ${isActive 
                                                ? 'bg-blue-50 text-blue-600' 
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                        `}
                                    >
                                        <Icon className="w-5 h-5 mr-3" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                    <div className="flex items-center">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <h2 className="ml-3 text-2xl font-semibold text-gray-800 md:ml-0">
                            {menuItems.find(item => item.id === activeMenu)?.label}
                        </h2>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none">
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Total Usuários</p>
                                        <p className="text-2xl font-semibold text-gray-700">1,234</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center">
                                    <div className="p-3 bg-green-100 rounded-lg">
                                        <ShoppingCart className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Vendas</p>
                                        <p className="text-2xl font-semibold text-gray-700">567</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center">
                                    <div className="p-3 bg-yellow-100 rounded-lg">
                                        <BarChart3 className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Receita</p>
                                        <p className="text-2xl font-semibold text-gray-700">R$ 45k</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center">
                                    <div className="p-3 bg-purple-100 rounded-lg">
                                        <FileText className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Relatórios</p>
                                        <p className="text-2xl font-semibold text-gray-700">89</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Conteúdo Principal
                            </h3>
                            <p className="text-gray-600">
                                Esta é a área de conteúdo principal do seu dashboard. 
                                Aqui você pode adicionar gráficos, tabelas e outros componentes.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DashboardPage;