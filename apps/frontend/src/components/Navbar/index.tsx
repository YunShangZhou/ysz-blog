'use client';
import { Input } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {
    console.log(`=`);
  };

  return (
    <div className="w-full px-[20px] py-[5px] flex align-items-center justify-between border rounded-[8px] border-black border-solid">
      <div className="flex-1 text-[16px] flex gap-10 items-center">
        <span className="text-[14px]">博客</span>
        <span className="text-[14px]">技术追新</span>
        <span className="text-[14px]">阅读书籍</span>
        <span className="text-[14px]">关于</span>
      </div>

      <Input
        className="w-[200px]"
        value={searchText}
        onChange={(e) => {
          const value = e?.target?.value;
          setSearchText(value);
        }}
        onPressEnter={handleClick}
        placeholder="搜索文章..."
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
