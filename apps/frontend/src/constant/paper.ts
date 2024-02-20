import { v4 as uuidv4 } from 'uuid';
import { paperProps } from '../type';

export const mockPaperList: paperProps[] = [
  {
    id: uuidv4(),
    title: '我的第一个全栈项目',
    description: '基于nx nestjs nextjs',
    date: new Date(),
    content:
      'bgfx 提供了一组调试文本输出的 api ，可以把一些文本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
  },
  {
    id: uuidv4(),
    title: '2024年,互联网行业又一春',
    description: 'xxx',
    date: new Date(),
    content:
      'bgfx 提供了一组调试文本输出的 api ，可以把一些文本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
  },
];
