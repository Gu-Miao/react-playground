import {
    SEARCH_FOCUS, SEARCH_BLUR, REFRESH_HOT_LIST, PANEL_MOUSEENTER,
    PANEL_MOUSEOUT, GET_DETAIL, LOGIN
} from './action-types';

export const searchFocusAction = () => ({
    type: SEARCH_FOCUS
});

export const searchBlurAction = () => ({
    type: SEARCH_BLUR
});

export const refreshHotListAction = (page) => ({
    type: REFRESH_HOT_LIST,
    page: page
});

export const panelMouseenterAction = () => ({
    type: PANEL_MOUSEENTER
});

export const panelMouseoutAction = () => ({
    type: PANEL_MOUSEOUT
});

export const getDetailAction = (id) => ({
    type: GET_DETAIL,
    id
});

export const loginAction = () => ({
    type: LOGIN
});