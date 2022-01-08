import React from "react";
import Apod from "../components/Apod/Apod";
import DatePicker from "../components/DatePicker/DatePicker";

export default function Home() {
  return (
    <main>
      <DatePicker />
      <Apod />
    </main>
  );
}
