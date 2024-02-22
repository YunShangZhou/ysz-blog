import { formatDate } from '@/utils/index';
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { mockCommentList, mockPaper } from 'src/constant/paper';
import { commentProps, paperProps } from 'src/type';



export default async function Paper(props: {
  params: Record<string, any>;
  searchParams: Record<string, any>;
}) {
  const { searchParams } = props;

  const res: { data: paperProps } = {
    data: mockPaper,
  };
  // const res = await fetch(`/api/paper?id=${searchParams.id}`);
  // const res = await fetch(`/api/nearlyPaper?id=${searchParams.id}`);

  const { title, description, date, content } = res.data;
  const time = formatDate(date);

  // const searchParams = useSearchParams();
  const posToComment = searchParams?.comment; // 若获取到，则自动定位到评论区

  const Comment = (props: commentProps) => {
    const { id, user, content, date } = props;
    const time = formatDate(date);

    return <div className='w-full flex p-[12px] border border-solid'>
      <div className='flex flex-col gap-[4px] mr-[20px] items-center justify-center'>
        <UserOutlined className='text-[20px]' />
        <span>{user}</span>
      </div>
      <div className='flex-1 flex flex-col'>
        <span className='w-full mb-[12px] text-[16px]'>{content}</span>
        <span className='w-full text-right text-[14px] text-gray-400'>{time}</span>
      </div>
    </div>
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col items-center">
      <div className='mb-[20px] flex flex-col items-center'>
        <span className="text-[24px]">{title}</span>
        <span className="text-[16px] text-gray-400">{description}</span>
        <Markdown>{content}</Markdown>
        <span className="w-full mt-[12px] text-right">
          提交于<span className='ml-[4px] text-gray-500'>{time}</span>
        </span>
      </div>

      {/* 评论区 */}
      <div className="w-full flex flex-col mb-[20px]">
        <span id="comment" className="mb-[12px] text-[24px]">
          评论
        </span>

        <div className='w-full'>
          {mockCommentList.map((item) => {
            return <Comment key={item.id} {...item} />
          })}
        </div>

      </div>

      {/* 留言区 */}
      <div className='w-full flex flex-col border border-solid border-black-500'>
        <span className="mb-[12px] text-[24px]">
          留言板
        </span>
        <form action="" method="get" className="flex flex-col gap-[8px]">
          <div className="w-full flex gap-[8px]">
            <label className='w-[60px]' >用户名: </label>
            <Input className='w-[70%]' type="text" name="name" id="name" required />
          </div>
          <div className="w-full flex gap-[8px]">
            <label className='w-[60px]' >邮箱: </label>
            <Input className='w-[70%]' type="email" name="email" id="email" required />
          </div>
          <div className="w-full flex gap-[8px]">
            <label className='w-[60px]' >留言: </label>
            <TextArea className='flex-1' name="comment" id="use-comment" required rows={4} placeholder="输入字符不超过300" maxLength={300} />
          </div>
          <div className="w-full flex justify-end">
            <Button htmlType="submit" type='primary' className='bg-blue-500'>提交</Button>
          </div>
        </form>
      </div>

    </div>
  );
}
