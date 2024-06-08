import { sizeStyle } from '../common/Card';

interface ISkeletonCardProps {
  size?: 'large' | 'medium';
}

export default function SkeletonCard({ size = 'medium' }: ISkeletonCardProps) {
  return (
    <div className="card w-72 flex flex-col justify-end bg-[#ECECEC] shadow-card_shadow m-auto">
      <div className={`skeleton-list-item w-72 ${sizeStyle[size]}`}></div>

      <div className="relative p-[15px] bg-[#ECECEC] w-full"></div>
    </div>
  );
}
