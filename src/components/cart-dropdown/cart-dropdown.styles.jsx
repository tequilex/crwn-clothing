import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from "../button/button.styles.jsx";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  align-items: center;
  justify-content: space-between;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: white;       
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;    
    border-radius: 20px;       
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 15px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-right: 6px;
`



