"use client";

import React, { useState } from 'react';
import { Chart } from "react-google-charts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const MapChart = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(Object.keys(data.data[0]).filter(key => key !== "GeoAreaName" && key !== "Age" && key !== "Sex")[0]);

  const years = Object.keys(data.data[0]).filter(key => key !== "GeoAreaName" && key !== "Age" && key !== "Sex");

  const formattedData = [
      ['Country', selectedYear],
      ...data.data.map((item: { [x: string]: any; GeoAreaName: string; }) => [item.GeoAreaName, item[selectedYear] || 0])
  ];

  const handleDataSetChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="w-full mx-auto bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <select
          value={selectedYear}
          onChange={handleDataSetChange}
          className="border border-gray-300 rounded p-2 text-black"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full bg-white p-4">
        <Chart
          chartType="GeoChart"
          width="100%"
          height="500px"
          data={formattedData}
          options={{
            colorAxis: { colors: ['#e7f0ff', '#4285f4'] },
            backgroundColor: '#fff',
            legend: 'none',
            tooltip: { isHtml: true },
          }}
        />
      </div>
    </div>
  );
};

export default MapChart;
