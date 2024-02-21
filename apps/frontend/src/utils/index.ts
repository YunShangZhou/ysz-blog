import dayjs from 'dayjs';
export const copyText = (value: string) => {
  navigator.clipboard.writeText(value);
};

export const formatDate = (date: Date) => {
  return dayjs(date).format('YYYY/MM/DD HH:mm:ss');
};

export const createQueryString = (config: {
  name: string;
  value: string;
  searchParams: any;
}) => {
  const { name, value, searchParams } = config;
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  return params.toString();
};
