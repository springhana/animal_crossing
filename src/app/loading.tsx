import EmptyIcon from '@/assets/icon/empty-item.svg';

export default function loading() {
  return (
    <div className="w-full h-[calc(100vh_-_6.25rem)] flex flex-col gap-2 justify-center items-center">
      <div className="loading">
        <EmptyIcon />
      </div>
      <p className="text-bs_28">로딩중...</p>
    </div>
  );
}
