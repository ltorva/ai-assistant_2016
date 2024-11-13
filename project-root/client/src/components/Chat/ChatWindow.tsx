import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import Loading from '../Common/Loading';
import { sendMessage } from '../../services/api';

interface Message {
  type: 'user' | 'ai';
  content: string;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (content: string) => {
    try {
      setLoading(true);
      // 添加用户消息
      setMessages(prev => [...prev, { type: 'user', content }]);
      
      // 发送请求到后端
      const response = await sendMessage(content);
      
      // 添加AI回复
      setMessages(prev => [...prev, { type: 'ai', content: response.response }]);
    } catch (error) {
      console.error('发送消息失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} type={msg.type} content={msg.content} />
        ))}
        {loading && <Loading />}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow; 