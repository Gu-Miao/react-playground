import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { getDetailAction } from '../../actions/action-creators';
import { DetailWrapper, Header, Content } from './style';


class Detail extends PureComponent {

    render() {
        return (
            <Fragment>
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content
                        dangerouslySetInnerHTML={{ __html: this.props.content }}
                    />
                </DetailWrapper>
            </Fragment>

        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = state => ({
    title: state.detail.getIn(['detail', 'title']),
    content: state.detail.getIn(['detail', 'content']),
    src: state.detail.getIn(['detail', 'src']),
});
const mapDispatchToProps = dispatch => ({
    getDetail: (id) => {
        dispatch(getDetailAction(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));