import React, { useEffect, useState } from 'react';
import Api from './Api';

function DashboardPage() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const response = await Api.get('flights/all');
      setFlights(response);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>AIRPORT</th>
            <th>TIME</th>
            <th>arriving</th>
            <th>departing</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.estDepartureAirport}>
              <td>{flight.estDepartureAirport}</td>
              <td>{new Date(flight.time).toLocaleString()}</td>
              <td>{flight.estArrivalAirport}</td>
              <td>{flight.estDepartureAirport}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardPage;
