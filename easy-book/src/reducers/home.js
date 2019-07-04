import { fromJS } from 'immutable';

import list1 from '../static/list1.jpg';
import list2 from '../static/list2.png';
import list3 from '../static/list3.jpg';

const defaultState = fromJS({
    list: [
        {
            id: 'dfe4asdf1',
            src: list1,
            title: '八段锦 （中国古代气功功法）',
            abstract: '八段锦是气功动功功法之一，由八节组成。说到八段锦的优势，它能改善神经体液调节功能和加强血液循环，对腹腔脏器有柔和的按摩作用，对神经系统、心血管系...'
        },
        {
            id: 'dfeEAd71',
            src: list2,
            title: '如何画出一张合格的技术架构图？',
            abstract: '阿里妹导读：技术传播的价值，不仅仅体现在通过商业化产品和开源项目来缩短我们构建应用的路径，加速业务的上线速率，也体现在优秀工程师在工作效率提升、......'
        },
        {
            id: 'EF16aeGF',
            src: list3,
            title: '成为数据分析师，抢占互联网红利！',
            abstract: '师从硅谷名企，洞察数据秘密，成为互联网高薪人才！小班辅导，一站式掌握AI红利！立抢限量席位！'
        }
    ]
});

export default (state = defaultState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};