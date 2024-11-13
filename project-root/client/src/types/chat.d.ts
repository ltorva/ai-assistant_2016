export interface Message {
  type: 'user' | 'ai';
  content: string;
}

export interface ChatInputProps {
  onSend: (message: string) => void;
}

export interface ChatMessageProps {
  type: 'user' | 'ai';
  content: string;
} 