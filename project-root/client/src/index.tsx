// 导入 React 核心库
import React from 'react';

// 导入 ReactDOM，用于将 React 组件渲染到 DOM
import ReactDOM from 'react-dom';

// 导入根组件 App
import App from './App';

// 导入 Ant Design 的样式文件
import 'antd/dist/antd.css';

// 导入自定义样式文件
import './styles/index.css';

// 使用 ReactDOM.render 将 App 组件渲染到 DOM
// React.StrictMode 是一个开发模式的包装器，用于突出显示应用程序中的潜在问题
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 将组件挂载到 id 为 'root' 的 DOM 元素
  document.getElementById('root')
); 