'use client';
import { Pagination } from 'antd';
import PaperList from 'src/components/PaperList';
import { mockPaperList } from 'src/constant';
import { paperProps } from 'src/type';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@/utils/index';
import { useEffect, useState } from 'react';

const PAGE_SIZE = 8;

interface paginationPaperListProps {
  data: paperProps[];
  total: number;
  currentPage: number;
  size: number;
}

export default function Books() {
  // const dataSource = await service.books.getPaperList();

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const tag = searchParams.get('tag');

  const [dataSource, setDataSource] = useState<paperProps[]>(mockPaperList);

  // TODO: 拉取文章数据
  const fetchDataSource = async () => {
    const params = {
      page: +page,
      pageSize: PAGE_SIZE,
      tag,
    };

    const dataSource = await mockPaperList;
  };

  // const res:paginationPaperListProps = await fetch('http://localhost:3000/api/paper/list');

  return (
    <div className="h-full border border-solid border-black-400">
      {tag && (
        <div className="font-bold text-[20px]">
          搜索
          <span className="text-red-500">{tag}</span>
          的结果:
        </div>
      )}
      <PaperList dataSource={dataSource} />
      <div className="flex justify-center">
        <Pagination
          total={100 || dataSource.length}
          pageSize={PAGE_SIZE}
          showSizeChanger={false}
          onChange={(page) => {
            const queryString = createQueryString({
              name: 'page',
              value: `${page}`,
              searchParams,
            });

            router.push(`${pathname}?${queryString}`);
          }}
        />
      </div>
    </div>
  );
}
