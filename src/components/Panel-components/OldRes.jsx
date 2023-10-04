import React from "react";
import PanelTable from "./PanelTable";
import OldResFilter from "./OldResFilter";

const OldRes = ()=> {
  return(
    <div className=" flex flex-col gap-3 py-3">
      <h2 className=" text-sm lg:text-lg font-semibold">Check Result</h2>
      <OldResFilter/>
      <PanelTable/>
    </div>
  )
}

export default OldRes