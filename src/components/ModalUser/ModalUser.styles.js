import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalBlock = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    color: #000000;
`;

export const ModalDiv = styled.div`
    max-height: 500px;
    width: 450px;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    padding: 36px 46px 30px 51px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const ModalAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10%;
`;

export const ModalName = styled.span`
    display: block;
    font-size: 40px;
    color: #000000;
    word-wrap: break-word;
    text-wrap: wrap;
    text-align: center;
`;

export const ModalLink = styled(Link)`
    display: block;
    font-size: 20px;
    color: #000000;
    word-wrap: break-word;
    text-wrap: wrap;
    text-align: center;
`;

export const ModalClose = styled.svg`
    position: relative;
    top: -30px;
    left: 195px;
    width: 40px;
    height: 40px;
`;
