import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";

const ViewGradePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // Adjust as needed

  // Dummy data for the table
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      jobTitle: "Software Engineer",
      questionsAsked: 10,
      grade: "A",
    },
    {
      id: 2,
      name: "Jane Smith",
      jobTitle: "Web Developer",
      questionsAsked: 8,
      grade: "B",
    },
    {
      id: 3,
      name: "Alice Johnson",
      jobTitle: "Data Analyst",
      questionsAsked: 12,
      grade: "C",
    },
    {
      id: 4,
      name: "Bob Brown",
      jobTitle: "UI/UX Designer",
      questionsAsked: 9,
      grade: "A",
    },
    {
      id: 5,
      name: "Emily Davis",
      jobTitle: "Product Manager",
      questionsAsked: 11,
      grade: "B",
    },
    {
      id: 6,
      name: "Michael Wilson",
      jobTitle: "Software Developer",
      questionsAsked: 7,
      grade: "C",
    },
    // Add more dummy data as needed
  ];

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dummyData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Delete a row
  const handleDeleteRow = (id) => {
    // Logic to delete the row
    console.log(`Row with ID ${id} deleted`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography
        variant="h4"
        style={{ color: "#3f51b5", marginBottom: "20px" }}
      >
        View Grades
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Job Title</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Questions Asked</strong>
              </TableCell>
              <TableCell>
                <strong>Grade</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Download Grade Sheet</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell align="center">{row.questionsAsked}</TableCell>
                <TableCell>{row.grade}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ backgroundColor: "#1976d2", color: "#fff" }}
                  >
                    Download
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDeleteRow(row.id)}
                    style={{ color: "red" }}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(dummyData.length / rowsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default ViewGradePage;
