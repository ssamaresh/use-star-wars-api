import { useState, useEffect } from "react";

export function useStarWarsAPI() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/species/");
      const data = await response.json();
      const quote = data.results[0].classification;
      setData(quote);
      setLoading(false);
    }
    getStarWarsQuote();
  }, []);
  return { data, loading };
}
 