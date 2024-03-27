import React from "react";
import Card from "./Card";
const status = ["Cases", "Death", "Recovered"];

const Maincontainer = () => {
  return (
    <div className=" ml-11 mt-36 flex w-[90%]">
      {status.map((state) => {
        return <Card state={state} key={state} />;
      })}
    </div>
  );
};

export default Maincontainer;
