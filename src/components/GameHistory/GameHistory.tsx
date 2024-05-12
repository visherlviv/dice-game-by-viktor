import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { GameHistoryTableProps } from "@/types";

const GameHistoryTable: React.FC<GameHistoryTableProps> = ({ history }) => {
  return (
    <TableContainer component={Paper} className="game-history-table-container">
      <Table aria-label="game history" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="game-history-table-header">Time</TableCell>
            <TableCell className="game-history-table-header">Guess</TableCell>
            <TableCell className="game-history-table-header">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row, index) => (
            <TableRow key={index} className="game-history-table-row">
              <TableCell>{new Date(row.time).toLocaleString()}</TableCell>
              <TableCell>{row.guess}</TableCell>
              <TableCell
                className={
                  row.isWin
                    ? "game-history-win-text-color "
                    : "game-history-loose-text-color "
                }
              >
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameHistoryTable;
