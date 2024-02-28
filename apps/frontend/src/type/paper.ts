export interface paperProps {
  id: string; // uuidv4
  title: string;
  createdAt: Date; // 创建
  updatedAt?: Date; // 最后修改于
  content: string;
  cover?: string;
  description?: string;
  tag: { id: number; tag: string }[];
  comment?: commentProps;
}

export interface commentProps {
  id: number;
  user: string;
  text: string;
  createdAt: Date;
  reply: {
    id: number;
    createdAt: Date;
    text: string;
    user: string;
  }[];
}

export interface replyProps {
  id: number;
  user: string;
  text: string;
  createdAt: Date;
}

