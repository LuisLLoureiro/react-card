import React from "react";
import {Card, CardNome, CardPreco, CardBotao} from "./style.js";

const CardProduto = ({nomeprod, precoprod, $botaoprod}) => {
    return(
    <Card>
    <CardNome>{nomeprod}</CardNome>
    <CardPreco>{precoprod}</CardPreco>
    <CardBotao $botaoprod={$botaoprod}>{$botaoprod ? "Produto está" : "Produto não está"} no carrinho</CardBotao>
    </Card>
)
}

export default CardProduto;