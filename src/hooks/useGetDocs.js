import { useEffect, useState } from 'react';

export const useGetDocs = () => {
  const [docs, setDocs] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.markdownguide.org/api/v1/basic-syntax.json')
      .then((res) => res.json())
      .then((data) => {
        setDocs(data.basic_syntax);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return [docs, error, loading];
};
