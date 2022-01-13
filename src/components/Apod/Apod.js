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

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>
          Welcome to Nasa Astromical picture of the day, Select a date to see
          the picture of the day
        </h2>
      </div>
    );
  }

  return (
    <article className="apod">
      <div className="titleCopyright">
        <h1>{data.title}</h1>
        <p>
          <em>{data.copyright}</em>
        </p>
      </div>

      <img src={data.url} alt={data.title} />
      <div className="titleDate">
        <h3>{data.title} -</h3>

        <p>{data.date}</p>
      </div>
      <p>{data.explanation}</p>
    </article>
  );
}
