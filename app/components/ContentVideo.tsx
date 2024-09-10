
export function ContentVideo(){
    return(
        <>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white ">
            <h1 className="text-6xl font-bold mb-4 text-mainBlue">Por que escolher a IAcademy?</h1>


            <p className="text-lg text-black">
                Escolha certa para Sua preparação: excelência, tecnologia e resultados.
            </p>
            <p className="text-lg text-black flex">
                Sua caminhada rumo ao <span className="text-mainBlue ml-1">sucesso</span>
            </p>

            <button className="mt-4 px-20 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all">
                Conhecer
            </button>
        </div>
        <section id="video-section" className="flex flex-col items-center mb-10 ">
            <div className="w-full max-w-6xl">
                <iframe
                className="w-full h-64 xl:h-96"
                src="https://youtu.be/lWtxjecgNiY?si=BuSmBj0XGCZWWfGA" 
                title="Vídeo de Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
        </section>
            </>
    )
}