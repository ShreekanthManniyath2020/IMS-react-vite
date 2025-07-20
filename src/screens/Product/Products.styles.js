import styled from "styled-components";
import { BlockWrapStyles } from "../../styles/global/default"
import { media } from "../../styles/theme/theme";

export const ProductBlockWrap = styled.div`
  ${BlockWrapStyles}

  .block-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;

    .block-title {
      margin-bottom: 4px;
    }
  }  
`;

export const Container = styled.div`
  padding: 1rem;
  max-width: 1500px;
  margin: auto;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const Card = styled.div`
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const Image = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
  border-radius: 6px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin: 0.7rem 0;
`;

export const Price = styled.p`
  color: #1e40af;
  font-weight: bold;
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #1e40af;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 600px;
  max-width: 90%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
