// ----------------------------------------------------------- Типы -----------------------------------------------------------
export interface Source {
  componentName: string;
  chunkType: string;
  meta: { url: string };
}
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  userQuestion: string | null;
  sources?: Source[];
  className?: string;
}

export interface ChatHistory {
  role: 'human' | 'ai';
  content: string;
}

export type ContentType = 'dev' | 'editorial' | 'design' | null;
export interface GlobalStore {
  messages: Message[];
  chatHistory: ChatHistory[];
  inputValue: string;
  contentType: ContentType;
}
