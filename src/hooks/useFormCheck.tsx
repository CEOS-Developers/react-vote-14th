import { useEffect, useState } from 'react';

export default function useFormCheck(prevState: string) {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (prevState !== '') {
      setBool(true);
    } else {
      setBool(false);
    }
  }, [prevState]);
  return bool;
}
