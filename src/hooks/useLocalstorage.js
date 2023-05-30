import { useEffect, useState } from 'react';

export const useLocalstorage = (initialData) => {
  const [localData, setLocalData] = useState(initialData);
  const storeLocalData = (data) => {
    localStorage.setItem('code', data);
    setLocalData(data);
  };
  if (!localStorage.getItem('code')) localStorage.setItem('code', initialData);
  useEffect(() => {
    setLocalData(localStorage.getItem('code'));
  }, []);

  return [localData, storeLocalData];
};
