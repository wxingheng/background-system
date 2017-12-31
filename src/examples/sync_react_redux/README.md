# react-redux

## react-redux是如何工作

* 什么是状态?
    ```
    * 服务器响应、缓存数据、本地生成尚未持久化到服务器的数据
    * UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等
    ```
* 为什么需要[redux][redux]?
    ```
    * 管理不断变化的 state 非常困难
    * state 在什么时候，由于什么原因，如何变化已然不受控制。
    * Redux 试图让 state 的变化变得可预测。
    ```
* [redux][redux]如何工作?
    * Store
        *  用来获取state和更新state的对象。
    * Action
        *  一个普通的对象, 描述发生了什么, 该对象会接收UI组件传递的值。
    * reducer
        *  接收一个state和一个Action, 并返回一个新的state。
    * UI组件
        *  一个纯组件, 只负责展示UI
    * 容器组件
        *  负责管理数据和逻辑，有两个方法mapStateToProps和mapDispatchToProps
    * Provider组件
        *  可以让容器组件拿到state, 这个组件把Store声明为context, 这样所有的后代组件都能得到Store
    * mapStateToProps
        *  负责输入逻辑, 这个方法订阅了Store, 每当state更新的时候，就会自动执行。
    * mapDispatchToProps
        *  负责输出逻辑, 它定义了哪些用户的操作应该当作 Action, 传给 Store。它可以是一个函数, 也可以是一个对象。
        
![](https://github.com/roger-Guo/background-system/blob/master/assets/react-redux.png)

## License
[MIT][MIT]

*******************
[redux]:http://cn.redux.js.org
[MIT]:https://tldrlegal.com/license/mit-license