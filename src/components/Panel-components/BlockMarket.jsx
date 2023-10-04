import React from "react";
import PanelTable from "./PanelTable";
import BetListLiveFilter from "./BetListLiveFilter";

const BlockMarket = ()=> {
  return(
    <div className=" flex flex-col gap-3 mt-2">
      <h2 className=" text-sm lg:text-lg font-semibold">Sports Listing</h2>
      <PanelTable/>
    </div>
  )
}

export default BlockMarket