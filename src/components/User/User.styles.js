import styled from 'styled-components';

export const UserBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  
  width: 250px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.6s ease 0s;
  }
`;

export const UserAvatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10%;
`;

export const UserName = styled.span`
  display: block;
  font-size: 20px;
  color: #ffffff;
  word-wrap: break-word;
  text-wrap: wrap;
  text-align: center;
`;