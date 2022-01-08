import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "Njhczoe9ZGn6HVEHUmAYZQut3tFuWthhHe7xQ79B";

export default function Apod() {
  const { date } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [date]);

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  return (
    <article>
      <h3>{data.title}</h3>
      <p>
        <em>{data.copyright}</em>
      </p>
      <figure>
        <img src={data.url} alt={data.title} />
        <figcaption>{data.title}</figcaption>
      </figure>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
    </article>
  );
}
