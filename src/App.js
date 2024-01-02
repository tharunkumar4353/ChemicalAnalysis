import React, { useState } from 'react';
import './App.css';

function App() {
  const [grade, setGrade] = useState('');
  const [heatNumber, setHeatNumber] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Your data array
  const data = [
    // Your data array
{ 
      date: '2023-01-01',
      DateNumber: '001',
      ItemNumber: 'A001',
      Grade: 'A',
      C: 0.1,
      Si: 0.2,
      Mn: 0.3
    },
    { 
      date: '2023-01-02',
      DateNumber: '002',
      ItemNumber: 'B001',
      Grade: 'B',
      C: 0.15,
      Si: 0.25,
      Mn: 0.35
    },
    { 
      date: '2023-01-03',
      DateNumber: '003',
      ItemNumber: 'C001',
      Grade: 'C',
      C: 0.2,
      Si: 0.3,
      Mn: 0.4
    },
    { 
      date: '2023-01-04',
      DateNumber: '004',
      ItemNumber: 'D001',
      Grade: 'D',
      C: 0.25,
      Si: 0.35,
      Mn: 0.45
    },
    { 
      date: '2023-01-05',
      DateNumber: '005',
      ItemNumber: 'E001',
      Grade: 'E',
      C: 0.3,
      Si: 0.4,
      Mn: 0.5
    },
    { 
      date: '2023-01-06',
      DateNumber: '006',
      ItemNumber: 'F001',
      Grade: 'F',
      C: 0.35,
      Si: 0.45,
      Mn: 0.55
    },
    { 
      date: '2023-01-07',
      DateNumber: '007',
      ItemNumber: 'G001',
      Grade: 'G',
      C: 0.4,
      Si: 0.5,
      Mn: 0.6
    },
    { 
      date: '2023-01-08',
      DateNumber: '008',
      ItemNumber: 'H001',
      Grade: 'H',
      C: 0.45,
      Si: 0.55,
      Mn: 0.65
    },
  ];


  const filteredData = data.filter((item) => {
    const dateInRange =
      (!dateFrom || item.date >= dateFrom) && (!dateTo || item.date <= dateTo);

    return (
      item.Grade.includes(grade) &&
      item.ItemNumber.includes(heatNumber) &&
      dateInRange
    );
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case 'grade':
        setGrade(value);
        break;
      case 'heatNumber':
        setHeatNumber(value);
        break;
      case 'dateFrom':
        setDateFrom(value);
        break;
      case 'dateTo':
        setDateTo(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="page">
      <div className="content">
        <div className="f1">
          <p className="input">
            <input
              type="text"
              className="inp1"
              id="grade"
              name="grade"
              placeholder="Grade"
              value={grade}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="inp2"
              id="heatNumber"
              name="heatNumber"
              placeholder="Heat Number"
              value={heatNumber}
              onChange={handleInputChange}
            />

            <input
              placeholder="Date From"
              type="date"
              className="inp3"
              id="dateFrom"
              name="dateFrom"
              value={dateFrom}
              onChange={handleInputChange}
            />

            <input
              placeholder="Date To"
              type="date"
              className="inp4"
              id="dateTo"
              name="dateTo"
              value={dateTo}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <button className="sub"><strong>Submit</strong> </button>
          </p>
        </div>
      </div>
      <div className="fulltable">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Date Number</th>
                <th>Item Number</th>
                <th>Grade</th>
                <th>C</th>
                <th>Si</th>
                <th>Mn</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.date}>
                  <td>{item.date}</td>
                  <td>{item.DateNumber}</td>
                  <td>{item.ItemNumber}</td>
                  <td>{item.Grade}</td>
                  <td>{item.C}</td>
                  <td>{item.Si}</td>
                  <td>{item.Mn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
