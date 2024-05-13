export enum Conditions {
  Over = "over",
  Under = "under",
}
export interface GameHistoryTableProps {
  history: { time: number; guess: string; result: number; isWin: boolean }[];
}
export interface GameControlsProps {
  condition: string;
  number: number;
  handleConditionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (event: Event, value: number | number[]) => void;
  rollDice: () => void;
  score: number;
}
export interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  style: string;
  children?: React.ReactNode;
}
