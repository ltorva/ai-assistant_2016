// 导入 React 核心库
import React from 'react';
// 导入聊天窗口组件
import ChatWindow from './components/Chat/ChatWindow';
// 导入全局样式文件
import './styles/index.css';
//App 组件通常是 React 应用程序的根组件（或称为入口组件），
//就像是整个应用的"大容器"。可以把它想象成一个树形结构的最顶层
// 定义 App 组件，使用 React.FC (Function Component) 类型
const App: React.FC = () => {
  return (
    // 创建一个具有 "app" 类名的根容器 div
    <div className="app">
      {/* 渲染聊天窗口组件 */}
      <ChatWindow />
    </div>
  );
};

// 导出 App 组件作为默认导出
export default App; 