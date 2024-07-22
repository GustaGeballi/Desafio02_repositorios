import styled from "styled-components";

export const ItemContainer = styled.div`

  width: 80%;

  display: flex;
  flex-direction: column;

  
  h3{
    font-size: 32px;
    color: #fAfAfA;
  }

  p{
    font-size: 16px;
    color: #fafaFA60;
  }

  a.remove{
    background-color: rgba(255, 0, 0, 255);
    color: #22272e;
    border-radius:20px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;

    padding: 10px 20px;
    margin: 20px 0;
  }

  a.remove:hover{
    opacity: 80%;
  }

  a.repositorie:hover{
    opacity: 80%;
  }

  a.repositorie{
    background-color: #ffa900;
    color: #22272e;
    border-radius:20px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;

    padding: 10px 20px;
    margin: 20px 0;
  }

  hr{
    color: #fafaFA60;
    margin: 20px 0;
  }

  .Buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

`