import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	return <div>正在加载</div>
  }
});

// 最终返回一个被LoadableComp包装的Detail组件
export default () => <LoadableComponent/>
