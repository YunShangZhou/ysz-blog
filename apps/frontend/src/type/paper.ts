export interface paperProps {
  id: string; // uuidv4
  title: string;
  description: string;
  date: Date;
  content: string;
  tags: string;
  cover?: string;
}
