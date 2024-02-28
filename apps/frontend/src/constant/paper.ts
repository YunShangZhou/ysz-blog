import { v4 as uuidv4 } from 'uuid';
import { commentProps, paperProps } from '@/type/index';

export const mockPaperList: paperProps[] = [
  {
    id: '11' || uuidv4(),
    title: '我的第一个全栈项目',
    description: '基于nx nestjs nextjs',
    createdAt: new Date(),
    tag:[],
    content:
      'bgfx 提供了一组调试文本输出的 api ，可以把一些一组一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输调试文本输一组调试文本输一组调试文本输文本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
  },
  {
    id: '22' || uuidv4(),
    title: '2024年,互联网行业又一春',
    description: 'xxx',
    createdAt: new Date(),
    tag:[],
    content:
      'bgfx 提供了一组调试文本输出的 api ，可以一组调试文本输一组调试文本输把一些文本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
  },
  {
    id: '33' || uuidv4(),
    title: '2024年,互联网行业又一春',
    description: 'xxx',
    createdAt: new Date(),
    tag:[],
    content:
      'bgfx 提供了一组调试文本输出的 api 了一组一组调试文本输一组调试文本输调试文本输出的 api ，了一组调试文本输出的 api ，，可以把一些文本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
  },
  {
    id: '44' || uuidv4(),
    title: '2024年,互联网行业又一春',
    description: 'xxx',
    createdAt: new Date(),
    tag:[],
    content:
      'bgfx 提供了一组调试文本输出的 api ，可以一组调试文本输一组调试文本输把一些文了一组调试文本输出的 api ，了一组调试文本输出的 api ，本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
  },
];

export const mockPaper: paperProps = {
  id: '11' || uuidv4(),
  title: '我的第一个全栈项目',
  description: '基于nx nestjs nextjs',
  createdAt: new Date(),
  tag:[],
  content:
    'bgfx 提供了一组调试文本输出的 api ，可以把一些一组一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输一组调试文本输调试文本输一组调试文本输一组调试文本输文本信息显示在屏幕上。这些 API 非常简陋，只是提供了一个文本模式缓冲区。离控制台还很远。',
};

export const mockCommentList: commentProps[] = [
  {
    id: '11' || uuidv4(),
    user: 'dinglei',
    content: '这是一条评论',
    createdAt: new Date(),
  },
  {
    id: '22' || uuidv4(),
    user: 'dinglei',
    content: '这是一条评论',
    createdAt: new Date(),
  },
  {
    id: '33' || uuidv4(),
    user: 'dinglei',
    content: '这是一条评论',
    createdAt: new Date(),
  },
]
