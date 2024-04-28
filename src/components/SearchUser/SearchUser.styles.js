import styled from 'styled-components';

export const SearchBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap:20px;
`;

export const SearchInput = styled.input`
  height: 52px;
  width: 500px;
  padding-left: 30px;
  padding-right: 30px;

  font-size: 20px;
  color:#ffffff;
  border-radius: 46px;
  border: 2px solid #ffffff;
  background: transparent;
`;

export const SearchButton = styled.button`
  height: 52px;
  width: 200px;

  background-color: #00c1ff;
  border: none;
  border-radius: 46px;
  
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #fff;

  cursor: pointer;
`;
