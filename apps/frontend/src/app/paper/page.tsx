import { formatDate } from '@/utils/index';
import { UserOutlined } from '@ant-design/icons';
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

  return (
    <div className="flex flex-col items-center">
      <Link href="#comment">去评论锚点</Link>
      <div className='mb-[20px] flex flex-col items-center'>
        <span className="text-[24px]">{title}</span>
        <span className="text-[16px] text-gray-400">{description}</span>
        <Markdown>{content}</Markdown>
        <span className="w-full mt-[12px] text-right">
          提交于<span className='ml-[4px] text-gray-500'>{time}</span>
        </span>
      </div>

      {/* 评论区 */}
      <div className="w-full flex flex-col">
        <span id="comment" className="mb-[12px] text-[24px]">
          评论
        </span>

        <div className='w-full'>
          {mockCommentList.map((item) => {
            return <Comment key={item.id} {...item} />
          })}
        </div>

      </div>

      <div className='w-full'></div>

    </div>
  );
}
