import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, Users, Sparkles, CheckCircle } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import Footer from '../components/Footer';

function Home() {
    const pricingPlans = [
        {
            title: "Básico",
            price: "R$ 100",
            description: "Ideal para começar",
            features: [
                "Até 3 automações",
                "Estatísticas mensais",
                "Suporte",
            ]
        },
        {
            title: "Profissional",
            price: "R$ 140",
            description: "Para equipes em crescimento",
            features: [
                "Até 5 automações",
                "Dashboard personalizado",
                "Suporte",
                "Integrações premium"
            ],
            highlighted: true
        },
        {
            title: "Enterprise",
            price: "R$ 220",
            description: "Para grandes soluções",
            features: [
                "Até 8 automações + 2 gratuitas",
                "Dashboard enterprise",
                "Suporte dedicado",
                "Relatórios avançados",
                "API completa",
                "Integrações personalizadas",
            ]
        }
    ];

    return (
        <>
            <main>
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-slate-900 via-bearer-red to-slate-900 min-h-screen flex items-center overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-20 right-20 w-72 h-72 bg-bearer-red rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-bearer-red rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                    
                    <div className="container mx-auto px-4 py-20 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-white">
                                <div className="inline-flex items-center bg-bearer-red/20 backdrop-blur-sm border border-bearer-red/30 rounded-full px-4 py-2 mb-6">
                                    <Sparkles className="w-4 h-4 mr-2 text-red-300" />
                                    <span className="text-sm font-medium text-red-200">Novidade: Automações com IA</span>
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    Automatize seu
                                    <span className="block bg-gradient-to-r from-red-400 to-bearer-red bg-clip-text text-transparent">
                                        negócio com Bearer
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    A plataforma completa para gestão, análise e automação de processos empresariais. 
                                    Aumente sua produtividade e tome decisões baseadas em dados.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        to="/dashboard"
                                        className="group bg-gradient-to-r from-bearer-red to-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Começar agora
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <a 
                                        href="#features"
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
                                    >
                                        Saiba mais
                                    </a>
                                </div>
                            </div>
                            
                            {/* Hero Image/Illustration Placeholder */}
                            <div className="hidden lg:block">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-bearer-red to-red-700 rounded-2xl blur-3xl opacity-30"></div>
                                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
                                        <div className="space-y-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="flex items-center space-x-4 animate-pulse" style={{animationDelay: `${i * 200}ms`}}>
                                                    <div className="w-12 h-12 bg-gradient-to-br from-bearer-red to-red-700 rounded-lg"></div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-4 bg-white/20 rounded w-3/4"></div>
                                                        <div className="h-3 bg-white/10 rounded w-1/2"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Funcionalidades poderosas
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Tudo que você precisa para levar seu negócio ao próximo nível
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Zap,
                                    title: "Automações",
                                    description: "Automatize tarefas repetitivas e ganhe tempo para o que realmente importa",
                                    color: "from-bearer-red to-red-700"
                                },
                                {
                                    icon: BarChart3,
                                    title: "Analytics",
                                    description: "Análises em tempo real com dashboards personalizáveis e intuitivos",
                                    color: "from-red-500 to-red-600"
                                },
                                {
                                    icon: Shield,
                                    title: "Segurança",
                                    description: "Proteção de dados com criptografia de ponta e conformidade total",
                                    color: "from-red-600 to-red-800"
                                },
                                {
                                    icon: Users,
                                    title: "Colaboração",
                                    description: "Trabalhe em equipe com ferramentas de colaboração em tempo real",
                                    color: "from-red-400 to-bearer-red"
                                }
                            ].map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                    >
                                        <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Social Proof Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Empresas que confiam em nós
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400 font-semibold">Logo {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Planos para todos os tamanhos
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Escolha o plano ideal para o seu negócio e comece hoje mesmo
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {pricingPlans.map((plan, index) => (
                                <PricingCard
                                    key={index}
                                    {...plan}
                                    onButtonClick={() => console.log(`Assinar plano ${plan.title}`)}
                                />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">
                                Todos os planos incluem 14 dias de teste grátis. Cancele quando quiser.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-bearer-red" />
                                    Sem cartão de crédito
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-bearer-red" />
                                    Suporte incluso
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-bearer-red" />
                                    Atualizações gratuitas
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-bearer-red to-red-800">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Pronto para transformar seu negócio?
                        </h2>
                        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                            Junte-se a milhares de empresas que já estão crescendo com o Bearer
                        </p>
                        <Link 
                            to="/dashboard"
                            className="inline-flex items-center bg-white text-bearer-red px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all shadow-xl hover:shadow-2xl"
                        >
                            Começar gratuitamente
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home;