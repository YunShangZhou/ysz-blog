import { formatDate } from '@/utils/index';
import Markdown from 'react-markdown';
import { mockPaper } from 'src/constant/paper';
import { paperProps } from 'src/type';

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

  // console.log(`----- 定位到评论区`,document.getElementById('comment-region'));

  return (
    <div className="flex flex-col items-center">
      <span className="text-[24px]">{title}</span>
      <span className="text-[16px] text-gray-400">{description}</span>
      <Markdown>{content}</Markdown>
      <div className="w-full flex justify-end">
        <span>提交于{time}</span>
      </div>
      {/* 评论区 */}
      <div className="w-full flex flex-col">
        <div className="h-[900px]">air wall</div>
        <span id="comment-region" className="text-[24px]">
          评论
        </span>
        <div className="h-[900px]">air wall</div>
      </div>
    </div>
  );
}
