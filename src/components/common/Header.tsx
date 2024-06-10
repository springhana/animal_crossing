'use client';

import { useRouter } from 'next/navigation';

import EmptyIcon from '@/assets/icon/empty-item.svg';
import useMenuModalStore from '@/store/useMenuModalStore';

export default function Header() {
  const { isOpen, onOpen, onClose } = useMenuModalStore();
  const router = useRouter();

  const handleOnClickMenu = () => {
    if (isOpen) onClose();
    else onOpen();
  };

  const handleOnClickHomeRouter = () => {
    router.push('/');
  };

  return (
    <header
      className={`w-full min-w-min_w flex justify-between items-center ${
        !isOpen && 'max-w-max_w'
      } h-[6.25rem] m-auto p-2 mobile:w-screen`}>
      <div
        className="w-full text-center cursor-pointer"
        onClick={handleOnClickHomeRouter}>
        <h1 className="text-bs_43 mobile:text-bs_28 flex justify-center mobile:justify-start items-center gap-2">
          <EmptyIcon className="mobile:scale-75" /> 모동숲 백과사전
        </h1>
      </div>

      <section className="fixed top-0 right-0 z-[101]">
        <button className="open-overlay" onClick={handleOnClickMenu}>
          <span
            className={`bar-top ${
              isOpen ? 'animate-top-bar' : 'animate-out-top-bar'
            }`}></span>
          <span
            className={`bar-middle ${
              isOpen ? 'animate-middle-bar' : 'animate-out-middle-bar'
            }`}></span>
          <span
            className={`bar-bottom ${
              isOpen ? 'animate-bottom-bar' : 'animate-out-bottom-bar'
            }`}></span>
        </button>
      </section>
    </header>
  );
}
