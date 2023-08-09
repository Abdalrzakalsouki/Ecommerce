import { useState, useEffect } from "react";

const useFetchs = (ids) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "https://fakestoreapi.com/products/";
  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const fetchPromise = ids.map((el) => fetchOnSource(url + el));
        const response = await Promise.all(fetchPromise);
        setData(response);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchOnSource = async (link) => {
      const response = await fetch(link);
      return response.json();
    };
    fetchAll();
  }, [ids]);

  return { data, loading, error };
};

export default useFetchs;
