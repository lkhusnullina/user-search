import styled from 'styled-components';

export const SortBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
`;

export const SortTitle = styled.h2`
  border-radius: 46px;
`;

export const SortButton = styled.button`
  height: 52px;
  width: 250px;

  border: 2px solid #ffffff;
  border-radius: 10px;
  background: transparent;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  
  &:hover {
    background: #b9ea2d;
    color: #000000;
    border: none;
  }
`;