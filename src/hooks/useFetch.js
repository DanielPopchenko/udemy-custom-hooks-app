import { useEffect, useState } from 'react';

// ! use makes React to see this function differently
export const useFetch = (fetchFunction, initialValue) => {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFunction();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
};
