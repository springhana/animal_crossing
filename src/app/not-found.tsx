import EmptyIcon from '@/assets/icon/empty-item.svg';

export default function Custom404() {
  return (
    <div className="w-full h-[calc(100vh_-_6.25rem)] flex flex-col gap-2 justify-center items-center">
      <div>
        <EmptyIcon />
      </div>
      <p className="text-bs_28">없는 페이지입니다.</p>
    </div>
  );
}
