import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// function data(name, age, course, batch){
//   return{  name, age, course, batch }
// }

const rows = [
  {
    "Id": "1",
    "Name": "John",
    "Age": "20",
    "Course": "MERN",
    "Batch": "October"
  },
  {
    "Id": "2",
    "Name": "Doe",
    "Age": 22,
    "Course": "MERN",
    "Batch": "November"
  },
  {
    "Id": "3",
    "Name": "Biden",
    "Age": 24,
    "Course": "MERN",
    "Batch": "September"
  },
  {
    "Id": "4",
    "Name": "Barar",
    "Age": 20,
    "Course": "MERN",
    "Batch": "September"
  },
  {
    "Id": "5",
    "Name": "Christ",
    "Age": 24,
    "Course": "MERN",
    "Batch": "October"
  },
  {
    "Id": "6",
    "Name": "Elent",
    "Age": 22,
    "Course": "MERN",
    "Batch": "November"
  }
];

export default function BasicTable() {
  return (
    <div>
      <div className="heading">
        <h1>Student Details</h1>
        <button>Add new student</button>
      </div>

      <div className="box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={rows.Id}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"> {row.Name} </TableCell>
                  <TableCell align="right">{row.Age}</TableCell>
                  <TableCell align="right">{row.Course}</TableCell>
                  <TableCell align="right">{row.Batch}</TableCell>
                  <TableCell align="right"><Link to="">Edit</Link></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
