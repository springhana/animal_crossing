import { useRouter } from 'next/navigation';

import SettingIcon from '@/assets/icon/setting.svg';

import CustomButton from './CustomButton';

export default function SettingButton() {
  const router = useRouter();

  const handleOnClickRouter = () => {
    router.push('/setting');
  };

  return (
    <CustomButton onClick={handleOnClickRouter}>
      <SettingIcon
        width="40"
        height="40"
        className="cursor-pointer transition-all hover:rotate-90"
      />
    </CustomButton>
  );
}
