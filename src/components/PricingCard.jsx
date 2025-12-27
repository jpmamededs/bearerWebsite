import RedButton from "./RedButton";

function PricingCard({ title, description, price }) {
    return (
        <>
            <div className="w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[25rem] h-auto min-h-[26rem] sm:min-h-[28rem] md:h-[30rem] border-3 flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-16 py-8" style={{ background: 'linear-gradient(135deg, #FBF6C1 0%, #FF353A 46%, #FFFEF8 100%)' }}>
                <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center px-4">
                    <h5 className="font-bold text-lg sm:text-xl md:text-2xl">{title}</h5>
                    <p className="text-xs sm:text-sm w-[9rem] sm:w-[10rem] text-center">{description}</p>
                </div>
                <div className="w-[80%] sm:w-[75%] md:w-[80%] bg-white border-3 flex flex-row gap-1 sm:gap-2 font-bold items-end justify-center py-4 sm:py-5 md:py-5">
                    <p className="text-xs sm:text-sm md:text-base">R$</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl">{price}</p>
                    <p className="text-xs sm:text-sm md:text-base">/mês</p>
                </div>
                <RedButton text={"Assinar"}/>
            </div>
        </>
    )
}

export default PricingCard;