import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [dateTime, setDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date like: Feb 07, 2026
  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
  };

  // Format time like: 09:05:12
  const formatTime = (date) => {
    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      {/* Greeting */}
      <div>
        <h1 className="text-white text-3xl font-semibold">
          Good Morning, Dipsan
        </h1>
        <p className="text-gray-100 text-sm">
          Give your best service to your customers
        </p>
      </div>

      {/* Date & Time */}
      <div className="text-right">
        <h1 className="text-white font-medium">{formatTime(dateTime)}</h1>
        <p className="text-gray-300 text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greeting;
