import React from 'react';
import './App.css';
import PlayerDisplay from "./components/PlayerDisplay";
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <div className="App">
      <Table hover responsive align="center">
        <tbody>
          <tr>
            <td colSpan="4"><PlayerDisplay name="Edwin van Der Saar"/></td>
          </tr>
          <tr>
            <td><PlayerDisplay name="Christiano Ronaldo"/></td>
            <td><PlayerDisplay name="Wayne Rooney"/></td>
            <td><PlayerDisplay name="Dimitar Berbatov"/></td>
          </tr>
          <tr>
            <td><PlayerDisplay name="Kevin De Bruyne"/></td>
            <td><PlayerDisplay name="Thiery Henry"/></td>
            <td colspan="2"><PlayerDisplay name="Robin van Persie"/></td>
            <td><PlayerDisplay name="Ryan Giggs"/></td>
          </tr>
          <tr>
            <td colspan="2"><PlayerDisplay name="Toni Kroos"/></td>
            <td colspan="2"><PlayerDisplay name="Robert Lewandowski"/></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
