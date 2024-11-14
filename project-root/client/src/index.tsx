// 导入React核心库和新的客户端渲染方法
import React from 'react';
import { createRoot } from 'react-dom/client';

// 导入根组件
import App from './App';

// 导入全局样式
import './styles/index.css';

// 获取根DOM节点
const container = document.getElementById('root');

// 确保container存在
if (!container) {
  throw new Error('Failed to find the root element');
}

// 创建React根实例
const root = createRoot(container);

// 渲染应用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 