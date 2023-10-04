import React from "react";
import BetListFilter from "./Report-components/BetListFilter";
import PanelTable from "./PanelTable";

const BetList = ()=> {
  return(
    <div className=" flex flex-col gap-3 py-3">
      <h2 className=" text-lg font-semibold">Bet List</h2>
      <BetListFilter/>
      <PanelTable/>
    </div>
  )
}

export default BetList