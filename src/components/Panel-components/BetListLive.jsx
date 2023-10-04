import React from "react";
import PanelTable from "./PanelTable";
import BetListLiveFilter from "./BetListLiveFilter";

const BetListLive = ()=> {
  return(
    <div className=" flex flex-col gap-3 mt-2">
      <h2 className=" text-lg font-semibold">Bet List Live</h2>
      <BetListLiveFilter/>
      <PanelTable/>
    </div>
  )
}

export default BetListLive