function Flashcard({ numero, titulo, descricao }) {
    return (
        <>
            <div className="w-full sm:w-[20rem] md:w-[21rem] h-auto min-h-[18rem] sm:min-h-[20rem] md:h-[21rem] border-3 flex flex-col p-6 sm:p-8 md:p-10 gap-3 sm:gap-4 items-left justify-left bg-[#FBF6C1]">
                <div className="w-fit h-fit flex flex-col gap-4 sm:gap-5 md:gap-6">
                    <div className="flex flex-row gap-2 items-center justify-left font-bold">
                        <p className="text-3xl sm:text-4xl md:text-5xl">{numero}.</p>
                        <h3 className="leading-tight text-base sm:text-lg w-[60%]">{titulo}</h3>
                    </div>
                    <p className="text-xs sm:text-sm md:text-xs">{descricao}</p>
                </div>
                <div className="flex flex-row items-end justify-end h-full">
                    <img src="/bearerMinimal.svg" className="w-4 h-4 sm:w-5 sm:h-5"/>
                </div>
            </div>
        </>
    )
}

export default Flashcard;