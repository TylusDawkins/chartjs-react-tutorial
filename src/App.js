import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { MonthsData } from "./Data";
import { Sales } from "./Sales"


function App() {
    const now = new Date()
    const yesterday = new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000))
    const last7Days = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000))
    const lastMonth = new Date(new Date().getTime() - (30 * 24 * 60 * 60 * 1000))
    const last6Months = new Date(new Date().getTime() - (182 * 24 * 60 * 60 * 1000))
    const lastYear = new Date(new Date().getTime() - (365 * 24 * 60 * 60 * 1000))

    console.log(Date.parse(Sales[0].effective_date).toString())

    console.log(Date.parse(now))
    console.log(Date.parse(yesterday))
    console.log(Date.parse(lastMonth))
    console.log(Date.parse(lastYear))

    // take the dates, parse them all for UTC miliseconds and compare them

    // console.log(last7Days)
    // console.log(lastMonth)
    // console.log(last6Months )
    // console.log(lastYear)
  

  const [monthsData, setMonthsData] = useState({
    labels: MonthsData.map((data) => data.month),
    datasets: [
      {
        label: "Total Sales",
        data: MonthsData.map((data) => data.totalSales),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userSales, setuserSales] = useState({
    labels: Sales.map((data) => data.result),
    datasets: [
      {
        label: "Result",
        data: Sales.map((data) => data.result),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // console.log(Sales)
  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={monthsData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={monthsData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={monthsData} />
      </div>
    </div>
  );
}

export default App;
