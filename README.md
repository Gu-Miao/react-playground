# React

## 全家桶

lib | des
-|-
react | 核心框架
react-dom | DOM 渲染核心库
react-scripts | 命令
redux | 引入 store action dispatch reducer
redux-thunk | redux 中间件，使得 actionCreator 可以返回一个函数而不仅仅是一个对象
react-redux | 提供 connect() 方便组件间通信
react-router-dom | 提供路由组件
react-router | 路由库
antd | 组件库
onsenui / react-onsenui | 组件库
immutable | 创建不可修改的对象，普遍用于封装 state
react-transition-group | 动画组件
styled-components | 自定义样式的组件
react-loadable | 动态加载组件
history | 路由记录

 

## 语法与概念

1. axios 

```js
axios.get(url)
	.then((res)={
		(res.data)=>{

		}
	})
	.catch(err=>{

	});
```

2. reduex 

3. reduex-thunk

4. react-reduex connect

```js
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {

};

const mapStateToProps = (dispatch, ownProps) => {

};

connect(mapStateToProps, mapDispatch, mergeProps, option)(MyComponent);

```


## 技巧，细节与性能优化

1. 时间函数绑定需要 bind(this) 时，写在 constructor() 中：
```js
constructor() {
	this.handleClick = this.handleClick.bind(this);
}
```

还有一种方法可以避免 this 指向错误

```js
// 定义函数时
handleClick() {} // 使用 function 定义，需要 bind(this)
handleClick = () => {} // 使用箭头函数定义，解决 this 指向问题
```

2. setState() 使用箭头函数代替对象作为参数，使用异步方法提升性能

3. 虚拟 DOM，diff 算法，同层比对（底层实现）

4. 生命周期函数 shouldComponentUpdate() 判断组件是否有必要重新渲染，减少性能损耗

5. ajax() 不要写在 render() 中，可以写在 componentDidMount() 中，写在 componentWillMount() 中也没问题，但使用 react native 等技术时可能会产生冲突

## 表单

* select 和 textarea
```jsx
<select value={this.state.value} onChange={this.handleChange}>
	<option value="grapefruit">葡萄柚</option>
	<option value="lime">酸橙</option>
	<option value="coconut">椰子</option>
	<option value="mango">芒果</option>
</select>
<textarea value={this.state.value} onChange={this.handleChange} />
```

* file
file 在 React 中永远是非受控组件

## import()
## React.lazy
## React.Suspense
## React.forwardRef