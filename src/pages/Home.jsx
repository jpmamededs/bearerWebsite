import PricingCard from "../components/PricingCard";


function Home() {
    return (
        <>

            <main>
                <section className="max-w-full w-full min-h-[50vh] md:h-[70vh] flex flex-row items-center justify-center md:justify-start border-b-3 border-b-black px-4 md:px-0" style={{ background: 'linear-gradient(to right, #ff353a, #ff8b8d)' }}>
                    <div className="w-full md:w-[30%] h-full flex flex-col gap-4 items-center md:items-start justify-center text-center md:text-left" style={{ marginLeft: 0 }}>
                        <div style={{ marginLeft: window.innerWidth >= 768 ? 160 : 0 }}>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Automatize seus processos com a bearer.</h2>
                            <p className="text-base md:text-lg w-full md:w-[28rem]">faça parte desta jornada junto a empresas que confiam na gente</p>
                        </div>
                    </div>
                </section>
                <section className='max-w-full w-full max-h-[100vh] h-[100vh] bg-white' style={{ paddingTop: 80, marginBottom: 80 }}>
                    <p className="text-lg font-bold" style={{ marginLeft: 160, marginBottom: 80 }}>Nossos planos</p>
                    <div className="flex flex-row items-center justify-between w-full">
                        <PricingCard />
                        <PricingCard />
                        <PricingCard />
                    </div>
                </section>
                <section>
                    hi
                </section>
            </main>

        </>
    )
}

export default Home;