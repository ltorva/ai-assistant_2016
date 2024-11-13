import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Avatar } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import { ChatMessageProps } from '../../types/chat';

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  return (
    <div className={`chat-message ${type}`}>
      <Avatar icon={type === 'user' ? <UserOutlined /> : <RobotOutlined />} />
      <div className="message-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage; 