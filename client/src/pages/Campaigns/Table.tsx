import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Targets from "./Targets";
import Status from "./Status";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#161818",
    color: theme.palette.common.white,
    borderColor: "#525252",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "white",
    borderColor: "#525252",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: "#28272A",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  color: "white",
  borderColor: "#525252",
}));

function createData(
  name: string,
  status: boolean,
  budget: string,
  reach: number,
  numberOfPosts: number,
  targets: React.ReactNode
) {
  return {
    name,
    status: <Status isActive={status} />,
    budget,
    reach,
    numberOfPosts,
    targets,
  };
}

const rows = [
  createData(
    "Campaign",
    true,
    "$115",
    24232,
    4,
    <Targets platforms={["facebook", "instagram"]} />
  ),
  createData(
    "Status",
    false,
    "$115",
    376345,
    4,
    <Targets platforms={["instagram"]} />
  ),
  createData(
    "Eclair",
    true,
    "$115",
    2433,
    6,
    <Targets platforms={["facebook", "instagram", "youtube"]} />
  ),
  createData(
    "Cupcake",
    false,
    "$115",
    35334,
    4,
    <Targets platforms={["facebook", "tiktok"]} />
  ),
  createData(
    "Gingerbread",
    false,
    "$115",
    131334,
    3,
    <Targets platforms={["youtube", "tiktok", "facebook", "instagram"]} />
  ),
];

interface Props {
  labels: String[];
  rows: any[];
}

export default function DataTable({ labels, rows }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {labels.map((label) => (
              <StyledTableCell>{label}</StyledTableCell>
            ))}
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Budget</StyledTableCell>
            <StyledTableCell>Reach</StyledTableCell>
            <StyledTableCell>Number of posts</StyledTableCell>
            <StyledTableCell>Targets</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.budget}</StyledTableCell>
              <StyledTableCell>{row.reach}</StyledTableCell>
              <StyledTableCell>{row.numberOfPosts}</StyledTableCell>
              <StyledTableCell>{row.targets}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
