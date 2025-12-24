function PricingCard() {
    return (
        <>
            <div className="w-[25rem] h-[30rem] border-3 flex flex-col items-center justify-center gap-16" style={{ background: 'linear-gradient(135deg, #FBF6C1 0%, #FF353A 46%, #FFFEF8 100%)' }}>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h5 className="font-bold text-2xl">Pacote inicial</h5>
                    <p className="text-sm w-[10rem] text-center">O pacote perfeito para começar com suas automações</p>
                </div>
                <div className="w-[80%] bg-white border-3 flex flex-row gap-2 font-bold items-end justify-center" style={{paddingTop: 20, paddingBottom:20}}>
                    <p>R$</p>
                    <p className="text-4xl">120,90</p>
                    <p>/mês</p>
                </div>
                <a className="cursor-pointer w-[50%] border-3">
                    <div className=" bg-bearer-red text-white font-bold text-center" style={{paddingTop: 15, paddingBottom: 15}}>
                        Assinar
                    </div>
                </a>
            </div>
        </>
    )
}

export default PricingCard;