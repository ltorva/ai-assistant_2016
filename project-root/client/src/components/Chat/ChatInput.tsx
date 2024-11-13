import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Input, Button } from 'antd';
import { ChatInputProps } from '../../types/chat';

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <Input.TextArea
        value={message}
        onChange={handleChange}
        onPressEnter={handleKeyPress}
        placeholder="请输入您的问题..."
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <Button type="primary" onClick={handleSend}>
        发送
      </Button>
    </div>
  );
};

export default ChatInput; 