import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem } from 'react-onsenui';

import {
    Container, Row, CarouselImg, List
} from './style';

import swiper1 from '../../static/swiper1.png';
import swiper2 from '../../static/swiper2.jpg';

class Home extends React.Component {

    render() {
        return (
            <Container className="clearfix">
                <Row>
                    <div className="main">
                        <Carousel
                            onSwipe={() => console.log(this.carousel)}
                            ref={(carousel) => { this.carousel = carousel; }}
                            swipeable
                            overscrollable
                            autoScroll
                            autoScrollRatio={0.3}
                        >
                            <CarouselItem className="swiper-item grey">
                                <div className='item-label'>
                                    <CarouselImg src={swiper1} />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="swiper-item green">
                                <div className='item-label'>
                                    <CarouselImg src={swiper2} />
                                </div>
                            </CarouselItem>
                        </Carousel>
                        <List>
                            {this.getList()}
                        </List>
                    </div>
                    <div className="side"></div>
                </Row>

            </Container>
        );
    }

    getList = () => {
        const list = []
        console.log(this.props.list)
        this.props.list.forEach((ele, index) => {
            const el = ele.toJS();
            list.push((
                <li key={index}>
                    <Link to={`/detail/${el.id}`}>
                        <div className="img-wrapper">
                            <img src={el.src} alt={el.title} />
                        </div>
                    </Link>
                    <div className="content">
                        <Link to={`/detail/${el.id}`}>
                            <div className="title">{el.title}</div>
                        </Link>
                        <div className="abstract">{el.abstract}</div>
                    </div>
                </li>
            ));
        });
        console.log(list);
        return list;
    };
}

const mapStateToProps = state => ({
    list: state.home.get('list')
});

export default connect(mapStateToProps, null)(Home);