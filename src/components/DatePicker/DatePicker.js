import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

export default function DatePicker() {
  const { date } = useParams();
  const navigate = useNavigate();

  const today = moment().format("YYYY-MM-DD");
  const minDate = moment("1995-06-16").format("YYYY-MM-DD");

  const dateHandler = (e) => {
    let date = e.target.value;
    navigate(`/apods/${date}`);
    window.location.reload();
  };

  return (
    <article className="datePicker">
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          min={minDate}
          max={today}
          onChange={dateHandler}
        />
      </div>
    </article>
  );
}
