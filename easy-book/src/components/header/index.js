import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
    HeaderWrapper, Logo, Nav, NavItem, SearchWrapper,
    Search, Addtion, Button, Img, PanelWrapper, Panel, Change
} from './style';
import {
    searchFocusAction, searchBlurAction, refreshHotListAction,
    panelMouseenterAction, panelMouseoutAction
} from '../../actions/action-creators';

class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="active left">首页</NavItem>
                    <NavItem className="left download">下载APP</NavItem>
                    <SearchWrapper>
                        <Search
                            className={this.props.focused ? 'focused' : ''}
                            onFocus={this.props.searchFocusAction}
                            onBlur={this.props.searchBlurAction}
                        />
                        <i
                            className={this.props.focused ? 'focused iconfont icon-search' : 'iconfont icon-search'}
                        ></i>
                        {this.showPanel()}
                    </SearchWrapper>
                    <Link to="/login">
                        {this.showLoginBtn()}
                    </Link>
                    <NavItem className="right login">
                        <Img />
                    </NavItem>
                    <NavItem className="right">
                        <i className="iconfont icon-Aa"></i>
                    </NavItem>
                </Nav>
                <Addtion>
                    <Button className="writting">
                        <i className="iconfont icon-yumaobi"></i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addtion>
            </HeaderWrapper>
        );
    }

    showLoginBtn = () => {
        if(this.props.isLogin) return <NavItem className="right login">登出</NavItem>
        return <NavItem className="right login">登录</NavItem>
    }

    showPanel = () => {
        if (this.props.focused || this.props.mouseIn) {
            return (
                <PanelWrapper
                    onMouseEnter={this.props.panelMouseenterAction}
                    onMouseLeave={this.props.panelMouseoutAction}
                >
                    <Panel>
                        <div className="panel-header">
                            <span className="hot">热门搜索</span>
                            <Change
                                onClick={() => { this.handleChangePage(this.props.page, this.props.totalPage, this.hotRefresher) }}
                            >
                                <i ref={(icon) => { this.hotRefresher = icon }} className="iconfont icon-refresh"></i>
                                换一换
                                    </Change>
                        </div>
                        <ul className="panel-body clearfix">
                            {this.getlist()}
                        </ul>
                    </Panel>
                </PanelWrapper>
            );
        } else {
            return null;
        }
    }

    getlist = () => {
        const hotList = [];
        const startIndex = (this.props.page - 1) * 10;
        const endIndex = this.props.page * 10 - 1;

        this.props.list.every((ele, index) => {
            if (index >= startIndex && index <= endIndex) {
                hotList.push(<li key={index}>{ele}</li>);
            } else if (index > endIndex) {
                return false;
            }
            return true;
        });
        return hotList;
    };

    handleChangePage = (page, totalPage, spin) => {
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

        if (page < totalPage) {
            this.props.refreshHotListAction(page + 1);
        } else {
            this.props.refreshHotListAction(1);
        }
    }
}

const mapStateToProps = state => ({
    focused: state.header.get('focused'),
    list: state.header.get('list'),
    totalPage: state.header.get('totalPage'),
    page: state.header.get('page'),
    mouseIn: state.header.get('mouseIn'),
    isLogin: state.login.get('isLogin')
});

const mapDispatchToProps = dispatch => bindActionCreators({
    searchFocusAction, 
    searchBlurAction, 
    refreshHotListAction,
    panelMouseenterAction,
    panelMouseoutAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);