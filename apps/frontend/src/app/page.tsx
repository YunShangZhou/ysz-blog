'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { mockPaperList } from '../constant';

export default async function Index() {
  const [latestPaperList, setLatestPaperList] = useState(mockPaperList);

  const fetchLatestPaperList = async () => {
    // const res = await fetch('http://localhost:3000/api/papers/latest');
    // setLatestPaperList(res)
  };

  useEffect(() => {}, []);

  const Main = () => {
    return (
      <div className="flex-1 flex flex-col gap-[20px] p-[12px] h-full border border-solid border-black-50">
        <div className="bold text-[24px]">最新文章</div>
        {latestPaperList?.map((item) => {
          const { id, date, description, title, content } = item;
          return (
            <div className="flex flex-col w-full border border-solid border-purple-500">
              <div className="bold text-[20px]">{title}</div>
              <div className="text-[12px] color-gray-500">{}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const Siderbar = () => {
    return (
      <div className="p-[12px] flex flex-col w-[20%] border border-solid border-red-500 h-fit">
        <div className="">个人信息...</div>
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
