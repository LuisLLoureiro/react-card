import styled from "styled-components";

export const Card = styled.div`
  border-radius: 50px;
  padding: 20px;
  width: 150px;
  background-color: gray;
  color: black;
`

export const CardNome = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`

export const CardPreco = styled.h3`
  font-size: 15px;
  margin-bottom: 10px;
`

export const CardBotao = styled.button`
  padding: 10px;
  border-radius: 0px;
  color: white;
  cursor: pointer;

  background-color: ${(props) =>
    props.botaoprod ? "#198754" : "#6c757d"};
`