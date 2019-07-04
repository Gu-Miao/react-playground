import styled from 'styled-components';

export const Container = styled.div`
    width: 960px;
    margin: 10px auto;
    .swiper-item {
        height: 270px;
        line-height: 270px;
        text-align: center;
        &.grey {
            background: grey;
        }
        &.green {
            background: green;
        }
    }
`;

export const Row = styled.div`
    margin-left: -15px;
    margin-right: -15px;
    .main {
        padding-top: 30px;
        padding-right: 0;
        width: 66.66667%;
        float: left;
        position: relative;
        min-height: 1px;
        padding-left: 15px;
    }
    .side {
        padding: 30px 0 0;
        margin-left: 4.16667%;
        width: 29.16667%;
        float: left;
        position: relative;
         min-height: 1px;
    }
`;

export const CarouselImg = styled.img`
    width: 100%;
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 10px;
    overflow: hidden;

    li {
        display: block;
        width: 100%;
        margin-bottom: 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        line-height: 20px;
    }

    .img-wrapper {
        float: right;
        width: 150px;
        height: 100px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
        }
    }

    .content {
        padding-right: 165px;

        .title {
            margin: -7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
        }

        .abstract {
            margin: 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
        }
    }
`;