import React, { useEffect, useState } from 'react';
import driversData from '../data/drivers.json';
// import { tableCustomStyles } from './tableCustomStyles';
import DataTable, { createTheme } from 'react-data-table-component';

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {

  background: {
    default: 'none',
  },
  context: {
    background: 'none',
  },

}, 'light');


const DriversTables = () => {

  const [search, setSearch] = useState('');
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  // TODO: the setFilteredDrivers should do the same job as setDrivers
  const getDrivers = () => {
    setDrivers(driversData.data);
    setFilteredDrivers(driversData.data)
  }

  const columns = [

    {
      name: '',
      selector: row => row.surname + " " + row.forename,
    },

    {
      name: '',
      width: '120px',
      selector: row => row.vehicleRegistration,
    },
    {
      name: '',
      width: '300',
      selector: row => {
        const activityTotal = row.traces.length;

        let sumRest = 0;
        let sumWork = 0;
        let sumDrive = 0;
        let sumAvail = 0;

        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            for (var j = 0; j < row.traces[i].activity.length; j++) {
              if (row.traces[i].activity[j].type == 'drive') {
                sumDrive += row.traces[i].activity[j].duration;
              }
              else if (row.traces[i].activity[j].type == 'rest') {
                sumRest += row.traces[i].activity[j].duration;
              }
              else if (row.traces[i].activity[j].type == 'work') {
                sumWork += row.traces[i].activity[j].duration;
              }
              else {
                sumAvail += row.traces[i].activity[j].duration;
              }
            }
          }
        }

        return 'Drive: ' + sumDrive + ' | Rest: ' + sumRest + ' | Work: ' + sumWork + ' | Avail: ' + sumAvail;
      }
    },
    {
      name: 'Mon',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-01') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
    {
      name: 'Tue',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-02') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
    {
      name: 'Wed',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-03') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
    {
      name: 'Thur',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-04') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
    {
      name: 'Fri',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-05') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
    {
      name: 'Sat',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-06') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
    {
      name: 'Sun',
      width: "60px",
      selector: row => {
        let btnState = "bg-white hover:bg-none py-2 px-2 border border-gray-400 rounded shadow";
        if (row.traces.length >= 1) {
          for (var i = 0; i < row.traces.length; i++) {
            if (row.traces[i].date == '2021-02-07') {
              btnState = "bg-green-500 hover:bg-green-500 py-2 px-2 rounded"
            }
          }
        }

        return <button className={btnState}></button>
      },
    },
  ]

  useEffect(() => {
    getDrivers();
  }, []);

  useEffect(() => {


    const result = drivers.filter(driver => {
      var driversFullName = driver.forename + ' ' + driver.surname + ' ' + driver.vehicleRegistration;
      return driversFullName.toLowerCase().includes(search.toLowerCase());
    })

    setFilteredDrivers(result);

    if (search.length === 0) {
      setFilteredDrivers(driversData.data)


    }

  }, [search])

  return (
    <>
      <input
        // className="w-25 form-control"
        className="flex flex-row px-10 mt-10 ml-10 bg-none border border-gray-400 rounded"
        type='text'
        placeholder='Search for Driver'
        value={search}
        onChange={(e) => setSearch(e.target.value)}></input>
      <DataTable
        theme='solarized'
        columns={columns}
        data={filteredDrivers}


      ></DataTable>
    </>
  )
}

export default DriversTables;