import Bebida from '../../public/assets/bebidas.png'
import Carne from '../../public/assets/carne.png'
import Entrada from '../../public/assets/entrada.png'
import Massa from '../../public/assets/massa.png'
import Salada from '../../public/assets/salada.png'
import Sobremesa from '../../public/assets/sobremesa.png'

export default function Botao ({filterType}){
    return(

        <div className='grid grid-cols-2 place-items-center gap-2 mt-10 
        tablet:grid-cols-3
        laptop:max-w-[1024px] laptop:mx-auto laptop:flex laptop:justify-between'>

            <button onClick={() => filterType('Entradas')} className="flex items-center justify-center gap-1 text-[14px] rounded-[8px] font-Poppins hover:scale-105 duration-300 px-4 py-2 w-[100%] bg-[#f3f3f3] hover:bg-[#daa520] active:bg-[#daa520]
        tablet:text-2xl">
                <img src={Entrada} alt="Ícone" className="w-6 h-6 mr-2" />
                <span className='text-black'>Entradas</span>
            </button>

            <button onClick={() => filterType('Carnes')} className="flex items-center justify-center text-[14px] rounded-[8px]  font-Poppins hover:scale-105 duration-300 px-4 py-2 w-[100%] bg-[#f3f3f3] hover:bg-[#daa520] active:bg-[#daa520]
        tablet:text-2xl">
                <img src={Carne} alt="Ícone" className="w-6 h-6 mr-2" />
                <span className='text-black'>carne</span>
            </button>

            <button onClick={() => filterType('Bebidas')} className="flex items-center justify-center text-[14px] rounded-[8px]  font-Poppins hover:scale-105 duration-300 px-4 py-2 w-[100%] bg-[#f3f3f3] hover:bg-[#daa520] active:bg-[#daa520]
        tablet:text-2xl">
                <img src={Bebida} alt="Ícone" className="w-6 h-6 mr-2" />
                <span className='text-black'>Bebidas</span>
            </button>

            <button onClick={() => filterType('Massas')} className="flex items-center justify-center text-[14px] rounded-[8px]  font-Poppins hover:scale-105 duration-300 px-4 py-2 w-[100%] bg-[#f3f3f3] hover:bg-[#daa520] active:bg-[#daa520]
        tablet:text-2xl">
                <img src={Massa} alt="Ícone" className="w-6 h-6 mr-2" />
                <span className='text-black'>Massas</span>
            </button>

            <button onClick={() => filterType('Saladas')} className="flex items-center justify-center text-[14px] rounded-[8px]  font-Poppins hover:scale-105 duration-300 px-4 py-2 w-[100%] bg-[#f3f3f3] hover:bg-[#daa520] active:bg-[#daa520]
        tablet:text-2xl">
                <img src={Salada} alt="Ícone" className="w-6 h-6 mr-2" />
                <span className='text-black'>Salada</span>
            </button>

            <button onClick={() => filterType('Sobremesas')} className="flex items-center justify-center text-[14px] rounded-[8px]  font-Poppins hover:scale-105 duration-300 px-4 py-2 w-[100%] bg-[#f3f3f3] hover:bg-[#daa520] active:bg-[#daa520]
        tablet:text-2xl">
                <img src={Sobremesa} alt="Ícone" className="w-6 h-6 mr-2" />
                <span className='text-black'>Sobremesa</span>
            </button>

            </div>
    )
}