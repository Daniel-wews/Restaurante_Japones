import Lupa from '../../public/assets/lupa.png'
export default function CampoDeBusca({textoBusca, textoBuscaDigitado}) {
    return (
        <>
            <div className="flex py-1 my-4 w-full border-2 rounded-full">
                <img className="w-[30px] m-2" src={Lupa} alt="ícone" />
                <input className=" w-full focus:outline-none"
                    type="text"
                    value={textoBusca}
                    onChange={(event) => textoBuscaDigitado(event.target.value)}
                    placeholder="Pesquise aqui um dos pratos do nosso cardápio"
                />
            </div>
        </>
    )
}