function RedButton({ text }) {
    return (
        <>
            <a className="cursor-pointer w-[70%] md:w-[50%] border-[3px]">
                <div className="bg-bearer-red text-white font-bold text-center hover:bg-[#e02f34] transition-colors duration-200" style={{ paddingTop: 15, paddingBottom: 15 }}>
                    {text}
                </div>
            </a>
        </>
    )
}

export default RedButton;