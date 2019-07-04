import React from 'react';
import Loadable from 'react-loadable';

import { Loading } from './style';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <Loading />
    }
});

export default () => <LoadableComponent />