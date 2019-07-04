import styled from 'styled-components';

import logo from '../../static/logo.png';
import beta from '../../static/beta.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    user-select: none;
    cursor: pointer;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    &.download {
        &:hover {
            background-color: #f5f5f5;
        }
    }
    &.login {
        font-size: 15px;
        font-weight: 400;
    }
    .icon-Aa {
        font-size: 25px;
    }
`;

export const Img = styled.img.attrs({
    src: beta
})`
    width: 56px;
    height: 25px;
    vertical-align: middle;
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .icon-search {
        display: block;
        line-height: 30px;
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #eee;
        position: absolute;
        bottom: 5px;
        right:5px;
        cursor: pointer;
        user-select: none;
        &.focused {
            background-color: #777;
            color: #fff;
        }
    }
`;

export const Search = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    transition: all 0.35s ease;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;

export const Addtion = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 15px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    &.reg {
        color: #ec6149;
        &:hover {
            background: #fef7f6;
        }
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }

    .icon-yumaobi {
        margin-right: 5px;
    }
`;

export const PanelWrapper = styled.div`

    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);

    margin-top: 9px;
    width: 250px;
    left: 20px;
    top: 100%;
    /* visibility: hidden;
    opacity: 0; */
    border-radius: 4px;
    z-index: 5;
    font-size: 14px;
    color: #969696;

    &::before {
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: 4;
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
        box-sizing: border-box;
    }
`;

export const Panel = styled.div`
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    position: relative;
    z-index: 5;

    .panel-header {
        height: 20px;
        margin-bottom: 10px;
        user-select: none;

        .hot {
            float: left;
        }
    }

    .panel-body {

        width: 230px;
        li {
            display: block;
            float: left;
            border: 1px solid #b4b4b4;
            margin-right: 8px;
            margin-bottom: 10px;
            padding: 4px 8px;
            font-size: 12px;
            color: #787878;
            border-radius: 3px;
            color: #333;
            user-select: none;
            cursor: pointer;
        }
    }
`;

export const Change = styled.span`
    float: right;
    cursor: pointer;

    .icon-refresh {
        font-size: 13px;
        margin-right: 5px;
        transition: all .2s ease-in;
        transform-origin: center center;
        display: block;
        float: left;
        vertical-align: middle;
    }
`;