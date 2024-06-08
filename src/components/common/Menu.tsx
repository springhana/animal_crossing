'use client';

import Image from 'next/image';
import Link from 'next/link';

import CatalogBoxmirror from '@/assets/icon/category/ic_catalog_boxmirror.svg';
import CatalogFashion from '@/assets/icon/category/ic_catalog_fashion.svg';
import CatalogFurniture from '@/assets/icon/category/ic_catalog_furniture.svg';
import CatalogPoster from '@/assets/icon/category/ic_catalog_poster.svg';
import CatalogWorkbench from '@/assets/icon/category/ic_catalog_workbench.svg';
import usePreventScroll from '@/hooks/usePreventsScroll';
import useMenuModalStore from '@/store/useMenuModalStore';

export default function Menu() {
  const { isOpen, onClose } = useMenuModalStore();
  usePreventScroll(isOpen);
  return (
    <main
      className={`fixed top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center z-[100] ${
        isOpen ? 'slide-modal' : 'slide-modal-reverse'
      }`}>
      <div
        className={`overlay-navigation ${
          isOpen ? 'overlay-slide-down' : 'overlay-slide-up'
        }`}>
        <nav role="navigation">
          <ul className="mobile_1:flex-col mobile:flex-col">
            <li
              className={`${
                isOpen ? 'slide-in-nav-item' : 'slide-in-nav-item-reverse'
              }`}>
              <Link
                href="/"
                onClick={onClose}
                data-content="종류, 성격, 생일"
                className="flex flex-col justify-center items-center">
                주민
                <CatalogPoster className="scale-150 mt-2" />
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? 'slide-in-nav-item-delay-1'
                  : 'slide-in-nav-item-delay-1-reverse'
              }`}>
              <Link
                href="/furniture"
                onClick={onClose}
                data-content="종류, 색상"
                className="flex flex-col justify-center items-center">
                가구
                <CatalogFurniture className="scale-150 mt-2" />
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? 'slide-in-nav-item-delay-2'
                  : 'slide-in-nav-item-delay-2-reverse'
              }`}>
              <Link
                href="/fashion"
                onClick={onClose}
                data-content="종류, 색상, 스타일, 테마"
                className="flex flex-col justify-center items-center">
                의류
                <CatalogFashion className="scale-150 mt-2" />
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? 'slide-in-nav-item-delay-3'
                  : 'slide-in-nav-item-delay-3-reverse'
              }`}>
              <Link
                href="/collection"
                onClick={onClose}
                data-content="종류, 달력"
                className="flex flex-col justify-center items-center">
                도감
                <Image
                  src="/image/Cherry_Salmon_NH_Icon 1.png"
                  alt="도감"
                  width={35}
                  height={35}
                />
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? 'slide-in-nav-item-delay-4'
                  : 'slide-in-nav-item-delay-4-reverse'
              }`}>
              <Link
                href="/catalog"
                onClick={onClose}
                data-content="종류"
                className="flex flex-col justify-center items-center">
                기타
                <CatalogBoxmirror className="scale-150 mt-2" />
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? 'slide-in-nav-item-delay-5'
                  : 'slide-in-nav-item-delay-5-reverse'
              }`}>
              <Link
                href="/construction"
                onClick={onClose}
                data-content="테마, 정보"
                className="flex flex-col justify-center items-center">
                건설
                <CatalogWorkbench width="22" height="22" className="mt-2" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
