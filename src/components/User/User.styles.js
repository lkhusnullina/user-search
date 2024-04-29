import styled from 'styled-components';

export const UserBlock = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;
  
  width: 200px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: #00c1ff;
    transform: scale(1.1);
    transition: all 0.6s ease 0s;
  }
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
`;

export const UserName = styled.span`
  display: block;
  font-size: 25px;
  color: #ffffff;
  overflow-wrap: break-word;
  text-wrap: wrap;
  text-align: center;
`;