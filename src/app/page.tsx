'use client'
import { useState } from "react";
import {SuperiorTitulo, Superior, Lista, Base} from "./pagestyle.js";
import CardProduto from "./components/CardProduto/CardProduto.jsx";



export default function Home() {

  const [caderno, setCaderno] = useState(false);
  const [martelo, setMartelo] = useState(true);
  const [furadeira, setFuradeira] = useState(true);
  const [canetas, setCanetas] = useState(false);



  return (
   
    <Base>
    <Superior>
      <SuperiorTitulo>Produtos</SuperiorTitulo>
    </Superior>
    <Lista>
    <CardProduto 
    nomeprod="Caderno"
    precoprod="R$19,99"
    $botaoprod={caderno}
    comprar={() => setCaderno(!caderno)}
    />
    <CardProduto 
    nomeprod="Martelo"
    precoprod="R$79,99"
    $botaoprod={martelo}
     comprar={() => setMartelo(!martelo)}
    />
    <CardProduto 
    nomeprod="Furadeira"
    precoprod="R$129,99"
    $botaoprod={furadeira}
     comprar={() => setFuradeira(!furadeira)}
    />
    <CardProduto 
    nomeprod="Canetas"
    precoprod="R$4,99"
    $botaoprod={canetas}
     comprar={() => setCanetas(!canetas)}
    />
    </Lista>
    </Base>
  );
}
