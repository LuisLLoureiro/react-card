import {SuperiorTitulo, Superior, Lista, Base} from "./pagestyle.js";
import CardProduto from "./components/CardProduto/CardProduto.jsx";

export default function Home() {
  return (
    <Base>
    <Superior>
      <SuperiorTitulo>Produtos</SuperiorTitulo>
    </Superior>
    <Lista>
    <CardProduto 
    nomeprod="Caderno"
    precoprod="R$19,99"
    botaoprod={false}
    />
    <CardProduto 
    nomeprod="Martelo"
    precoprod="R$79,99"
    botaoprod={true}
    />
    <CardProduto 
    nomeprod="Furadeira"
    precoprod="R$129,99"
    botaoprod={true}
    />
    <CardProduto 
    nomeprod="Canetas"
    precoprod="R$4,99"
    botaoprod={false}
    />
    </Lista>
    </Base>
  );
}
