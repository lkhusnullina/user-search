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
  width: 210px;

  border: 2px solid #ffffff;
  border-radius: 10px;
  background: transparent;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.$isActive ? "#b9ea2d" : "#ffffff" };
  border: ${props => props.$isActive ? "2px solid #b9ea2d" : '2px solid #ffffff' };
  cursor: pointer;
  transition: all 0.5s ease 0s;

  &:hover {
    color: #b9ea2d;
    border-color: #b9ea2d;
    text-decoration-line: underline;
  }

  &:active {
    color: "#b9ea2d";
    text-decoration-line: none;
  }
`;