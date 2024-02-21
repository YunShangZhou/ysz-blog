'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { mockPaperList } from '../constant';
import dayjs from 'dayjs';
import Image from 'next/image';
import avatarImg from '@/assets/image/avatar.png';

import Markdown from 'react-markdown';
import Link from 'next/link';
import { copyText } from '@/utils/';

export default function Index() {
  const [latestPaperList, setLatestPaperList] = useState(mockPaperList);

  const fetchLatestPaperList = async () => {
    // const res = await fetch('http://localhost:3000/api/papers/latest');
    // setLatestPaperList(res)
  };

  useEffect(() => {
    fetchLatestPaperList();
  }, []);

  const Main = () => {
    return (
      <div className="flex-1 flex flex-col gap-[20px] p-[12px] h-full border border-solid border-black-50">
        <div className="bold text-[24px]">最新文章</div>
        {latestPaperList?.map((item) => {
          const { id, title, date, description, content } = item;
          const time = dayjs(date).format('YYYY/MM/DD HH:mm:ss');

          return (
            <div
              key={id}
              className="flex flex-col w-full border border-solid border-purple-500"
            >
              <span
                suppressHydrationWarning
                className="text-[12px] color-gray-300"
              >
                {time}
              </span>
              <span className="bold text-[20px]">{title}</span>
              <span className="bold text-[12px] color-gray-200">
                {description}
              </span>
              <Markdown>{content}</Markdown>
            </div>
          );
        })}
      </div>
    );
  };

  const handleEmailClick = () => {
    copyText('yunshangzhou@163.com')
  };

  const Siderbar = () => {
    return (
      <div className="flex flex-col w-[20%] border border-solid border-red-500 h-fit">
        <div className="flex flex-col gap-[12px]">
          {/* 个人信息... */}
          <Image src={avatarImg} alt="" />
          <div className="flex gap-[4px]">
            <span>昵称:</span>
            <span>云</span>
          </div>
          <div className="flex gap-[4px]">
            <span>Email:</span>
            <span className="overflow-anywhere">yunshangzhou@163.com</span>
          </div>
          <span className="text-blue-500" onClick={handleEmailClick}>
            email
          </span>
          <Link
            className="text-blue-500"
            href="https://github.com/yunshangzhou"
          >
            github
          </Link>
        </div>
      </div>
    );
  };

  return (
    // whole
    <div className="h-full w-full border pt-[12px] px-[12px] flex gap-[20px]">
      {/* 文章列表 */}
      <Main />

      {/* 侧边栏 */}
      <Siderbar />
    </div>
  );
}
