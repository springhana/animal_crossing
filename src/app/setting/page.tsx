'use client';

import GithubIcon from '@/assets/icon/github.svg';
import { CompoundList } from '@/components/common/CompoundList';

export default function Setting() {
  return (
    <CompoundList>
      <h1 className="text-bs_34 my-10">
        Nookipedia에서 제공해준 모여봐요 동물의숲 오픈 API를 사용하여 만든
        모동숲 백과사전 사이트입니다.
      </h1>

      <div className="flex items-center">
        <GithubIcon width="60" height="60" />
        <a href="https://api.nookipedia.com/doc">Nookipedia 오픈 API</a>
      </div>

      <div className="flex items-center">
        <GithubIcon width="60" height="60" />
        <a href="https://github.com/springhana/animal_crossing">
          https://github.com/springhana/animal_crossing
        </a>
      </div>
    </CompoundList>
  );
}
