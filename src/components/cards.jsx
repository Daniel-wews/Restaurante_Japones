export default function Cards({foods}){
    return(
        <div className="bg-[#e4d7b4] grid grid-cols-1 lg:grid-cols-4 gap-6 p-4
                tablet:grid-cols-2 
                laptop:flex  flex-grow flex-wrap">
                    {foods.map((item, index) => (
                        <div key={index} className="border border-[#daa520]  rounded-lg hover:scale-105 duration-300
                        tablet:last-of-type:col-span-2
                        laptop:w-[31%] laptop:flex-grow ">
                            <img src={item.imagem} alt={item.nome} className="w-full h-[250px] object-cover rounded-t-lg" />
                            <div className="flex flex-col justify-evenly px-2 py-4 gap-2 ">
                                <p className="font-bold text-2xl font-Poppins">{item.nome}</p>
                                <p className="text-[#daa520] font-Poppins">{item.categoria}</p>
                                <p className="text-[14px] font-Poppins laptop:text-[16px]">{item.descricao}</p>
                                <p className="flex justify-end">
                                    <span className="font-bold text-black">R${item.preco.toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
    )
}