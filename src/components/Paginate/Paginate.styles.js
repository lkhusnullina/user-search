import styled from 'styled-components';

export const PaginateBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PaginateButtons = styled.div`
    margin-botton: 30px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
`;

export const PaginateButton = styled.button`
    height: 52px;
    width: 200px;

    background-color: #00c1ff;
    border: none;
    border-radius: 10px;

    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #fff;

    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
        background: #007aff;
        border: none;
    }

    &:disabled {
        opacity: 0.5;
        background: grey;
    }
`;
