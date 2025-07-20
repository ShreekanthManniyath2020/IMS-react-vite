import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: #e60023;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.primary ? '#0070f3' : '#e0e0e0'};
  color: ${props => props.primary ? 'white' : 'black'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.primary ? '#0059c1' : '#cfcfcf'};
  }
`;

