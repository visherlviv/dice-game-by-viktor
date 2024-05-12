import React, { useState } from "react";
import GameHistoryTable from "@/components/GameHistory/GameHistory";
import GameControls from "@/components/GameControls/GameControls";
import CustomDialog from "@/components/CustomDialog/CustomDialog";
import WinSVG from "@/img/WinSvg";
import LooseSVG from "@/img/LooseSvg";
import { Conditions } from "@/types";

const GamePage = () => {
  const [number, setNumber] = useState<number>(50);
  const [condition, setCondition] = useState<string>("over");
  const [looseMessage, setLooseMessage] = useState<string>("");
  const [history, setHistory] = useState<
    { time: number; guess: string; result: number; isWin: boolean }[]
  >([]);
  const [winOpen, setWinOpen] = useState<boolean>(false);
  const [loseOpen, setLoseOpen] = useState<boolean>(false);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const currentTime = Date.now();
    const guess =
      condition === Conditions.Over ? "Over " + number : "Under " + number;
    setHistory((prevHistory) => {
      const history = [...prevHistory];
      let isWin = false;
      if (history.length === 10) {
        history.pop();
      }
      if (
        (condition === Conditions.Over && randomNumber > number) ||
        (condition === Conditions.Under && randomNumber < number)
      ) {
        isWin = true;
      }
      return [
        { time: currentTime, guess: guess, result: randomNumber, isWin: isWin },
        ...history,
      ];
    });

    if (
      (condition === Conditions.Over && randomNumber > number) ||
      (condition === Conditions.Under && randomNumber < number)
    ) {
      setWinOpen(true);
    } else {
      if (condition === Conditions.Over) {
        setLooseMessage("Number was lower");
      } else {
        setLooseMessage("Number was higher");
      }
      setLoseOpen(true);
    }
  };

  const handleClose = () => {
    setWinOpen(false);
    setLoseOpen(false);
  };

  const handleNumberChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setNumber(value);
    }
  };

  const handleConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCondition((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div className="controls-wrapper">
        <GameControls
          condition={condition}
          number={number}
          handleConditionChange={handleConditionChange}
          handleNumberChange={handleNumberChange}
          rollDice={rollDice}
          score={number}
        />
      </div>
      <GameHistoryTable history={history} />
      <CustomDialog open={winOpen} onClose={handleClose} style="green">
        <div className="custom-dialog-content-wrapper">
          <WinSVG />
          <h5 className="custom-dialog-header-win">You won</h5>
        </div>
      </CustomDialog>
      <CustomDialog open={loseOpen} onClose={handleClose} style="red">
        <div className="custom-dialog-content-wrapper">
          <LooseSVG />
          <h5 className="custom-dialog-header-loose">You lost</h5>
        </div>
        <p className="custom-dialog-loose-message">{looseMessage}</p>
      </CustomDialog>
    </div>
  );
};

export default GamePage;
