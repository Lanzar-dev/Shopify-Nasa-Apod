import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "Njhczoe9ZGn6HVEHUmAYZQut3tFuWthhHe7xQ79B";

export default function Apod() {
  const { date } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [date]);

  console.log(data);

  return (
    <div>
      <p>{date}</p>
    </div>
  );
}
