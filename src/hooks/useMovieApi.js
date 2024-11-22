import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useMovieApi(fetchFunction, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFunction(params);
        setData(result);
      } catch (err) {
        console.error(err);
        setError(err);
        navigate("/notfound", { replace: true });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [fetchFunction, params, navigate]);

  return { data, loading, error };
}
