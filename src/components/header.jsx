import banner from '../../public/assets/banner.png'
export default function Header(){
    return(
        <header  className=" relative flex items-center justify-center laptop:max-w-[1024px] laptop:mx-auto laptop:px-1">
            <img  className='w-full' src={banner} alt="" />
            <div className=' absolute text-center'>
            <h1 className='text-2xl font-Poppins text-[#FF8C00] celular:text-4xl tablet:text-4xl laptop:text-5xl desktop:text-7xl'>RESTAURANT</h1>
            <p className="text-[#daa520] font-Dancing text-1xl w-[200px] 
            celular:w-[350px] celular:text-[20px]
            tablet:text-[26px] tablet:w-[450px]
            laptop:text-3xl laptop:w-[600px]
            desktop:text-4xl desktop:-[700px]">De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
        </header>
    )
}