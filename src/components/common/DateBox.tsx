import 'react-day-picker/dist/style.css';

import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';

interface IDateBoxProps {
  onChangeDate: (date: string) => void;
}

export default function DateBox({ onChangeDate }: IDateBoxProps) {
  const [value, setValue] = useState<Date>();

  useEffect(() => {
    if (value) {
      const date = new Date(value.toString());
      const month = date.getMonth() + 1;
      const day = date.getDate();

      onChangeDate(`${month}/${day}`);
    } else {
      onChangeDate('');
    }
  }, [value]);

  return (
    <div>
      <DayPicker mode="single" selected={value} onSelect={setValue} />
    </div>
  );
}
