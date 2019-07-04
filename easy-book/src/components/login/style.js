import styled from 'styled-components';

export const LoginBox = styled.div`
    width: 300px;
    height: 280px;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #888888;
    background-color: #fff;
    padding: 10px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        text-align: center;
        margin: 20px 0;
    }

    input {
        outline: none;
        border: 1px solid #ccc;
        padding: 4px 8px;
        display: block;
        width: 100%;
        height: 36px;
        border-radius: 4px;
        color: #333;
        box-shadow: none;
        box-sizing: border-box;
        margin-bottom: 20px;
    }

    button {
        outline: none;
        border: 1px solid #08c;
        background: #08c;
        padding: 4px 8px;
        display: block;
        width: 100%;
        height: 36px;
        border-radius: 4px;
        color: #fff;
        box-shadow: none;
        box-sizing: border-box;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
            background: #07b;
            border-color: #07b;
        }
    }
`