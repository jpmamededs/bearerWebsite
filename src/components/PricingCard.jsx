import { Check } from 'lucide-react';

function PricingCard({ 
    title, 
    price, 
    period = "mês", 
    description, 
    features, 
    highlighted = false,
    buttonText = "Assinar",
    onButtonClick 
}) {
    return (
        <div className={`
            relative rounded-2xl p-8 transition-all duration-300
            ${highlighted 
                ? 'bg-gradient-to-br from-bearer-red to-red-800 text-white shadow-2xl scale-105 border-2 border-red-400' 
                : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
            }
        `}>
            {highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Mais Popular
                    </span>
                </div>
            )}
            
            <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>
                <p className={`text-sm ${highlighted ? 'text-red-100' : 'text-gray-600'}`}>
                    {description}
                </p>
            </div>

            <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {price}
                    </span>
                    <span className={`text-lg ml-2 ${highlighted ? 'text-red-100' : 'text-gray-600'}`}>
                        /{period}
                    </span>
                </div>
            </div>

            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                            highlighted ? 'text-green-300' : 'text-green-500'
                        }`} />
                        <span className={`text-sm ${highlighted ? 'text-red-50' : 'text-gray-700'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                onClick={onButtonClick}
                className={`
                    w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200
                    ${highlighted 
                        ? 'bg-white text-bearer-red hover:bg-red-50 shadow-lg hover:shadow-xl' 
                        : 'bg-gradient-to-r from-bearer-red to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg'
                    }
                `}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default PricingCard;
