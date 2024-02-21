'use client';
import { Input } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
import logoImg from '@/assets/image/logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {};

  const navItems = [
    {
      label: '博客',
      link: '/books',
    },
    {
      label: '技术追新',
      link: '/books',
    },
    {
      label: '阅读书籍',
      link: '/books',
    },
    {
      label: '关于',
      link: '',
    },
  ];

  return (
    <div className="w-full px-[20px] py-[5px] flex align-items-center justify-between border rounded-[8px] border-black border-solid">
      <div className="flex-1 text-[16px] flex gap-10 items-center">
        <Link className='text-[24px] shadow cursor-[pointer]' href="/">Blog</Link>
        {navItems.map((item) => {
          return (
            <Link key={item.label} href={item.link} className="text-[14px]">
              {item.label}
            </Link>
          );
        })}
      </div>

      <Input
        className="w-[200px]"
        value={searchText}
        onChange={(e) => {
          const value = e?.target?.value;
          setSearchText(value);
        }}
        placeholder="搜索文章..."
        onPressEnter={handleClick}
        suffix={
          <SearchOutlined
            style={{ fontSize: '16px', cursor: 'pointer' }}
            onClick={handleClick}
          />
        }
      />
    </div>
  );
};

export default Navbar;
