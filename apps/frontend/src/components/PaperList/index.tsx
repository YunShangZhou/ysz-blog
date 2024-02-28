import { formatDate } from '@/utils/index';
import dayjs from 'dayjs';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { paperProps } from 'src/type';

interface IProps {
  dataSource: paperProps[];
}

const PaperList = (props: IProps) => {
  const { dataSource } = props;
  return (
    <div className="flex flex-col gap-[12px]">
      {dataSource?.map((item) => {
        let { id, title, createdAt, description, content, tag } = item;
        const time = formatDate(createdAt);
        const limitContent = content.slice(0, 80);

        return (
          <div key={id} className="flex flex-col w-full border border-solid">
            <span
              suppressHydrationWarning
              className="text-[12px] color-gray-300"
            >
              {time}
            </span>
            <Link
              href={`/paper/?id=${id}`}
              className="w-fit bold text-[20px] hover:text-blue-400"
            >
              {title}
            </Link>
            <span className="bold mb-[8px] text-[12px] color-gray-200">
              {description}
            </span>
            <Markdown>{limitContent}</Markdown>
            <div className="mt-[12px] flex justify-between">
              <div className="flex items-center gap-[8px]">
                <span className="text-[16px]">标签:</span>
                <div className="flex items-center gap-[4px]">
                  {!tag.length && '暂无'}
                  {tag.map(({ tag }) => {
                    return (
                      <Link
                        key={tag}
                        className="hover:text-blue-400"
                        href={`/books/?tag=${tag}`}
                      >
                        {tag}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                className="hover:text-blue-400"
                suppressHydrationWarning
                href={`/paper/?id=${id}#comment`}
                target="_blank"
              >
                评论{`(${Math.floor(Math.random() * 100)})`}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaperList;
