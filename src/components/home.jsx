import React, { useState } from "react"
import { produtos } from '../data/data.jsx'
import Botao from "./botoes.jsx";
import CampoDeBusca from "./pesquisa.jsx";
import Header from "./header.jsx";
import Cards from "./cards.jsx";

export default function Home() {

    const [foods, setFoods] = useState(produtos)
    const [textoBusca, setTextoBusca] = useState("");

    const filterType = (categoria) => {
        setFoods(
            produtos.filter((item) => {
                return item.categoria === categoria;
            })
        )
    }

    const textoBuscaDigitado = (textoDigitado) => {
        setTextoBusca(textoDigitado);
        setFoods(
            produtos.filter(
                (categoria) =>
                    categoria.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
                    categoria.categoria.toLowerCase().includes(textoDigitado.toLowerCase())
            )
        );
    };

    return (
        <body>

            <Header />

            <main className="flex flex-col p-5 tablet:max-w-[1024px] laptop:mx-auto laptop:p-1" >

                <Botao filterType={filterType} />

                <CampoDeBusca textoBusca={textoBusca} textoBuscaDigitado={textoBuscaDigitado} />

                <section>

                <h2 className="text-4xl text-[#daa520] font-Dancing font-bold text-center py-6">Cardápio</h2>
                    
                <Cards foods={foods} />

                </section>

                

            </main>
        </body>
    )
}