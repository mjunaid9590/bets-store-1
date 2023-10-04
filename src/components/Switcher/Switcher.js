import { useState } from "react";

const Switcher = ({
  label
}) => {
  const [active, setActive] = useState(false);

  return(
    <label className="relative cursor-pointer flex gap-3 items-center">
      <input type="checkbox" className="absolute opacity-0" onChange={() => setActive(!active)}/>
      <span className="w-8 h-4 rounded rounded-[16px] bg-slate-400 relative">
        <span className={`w-4 h-4 rounded-full block absolute ${active ? 'bg-[#f50] right-0' : 'bg-white'}`}></span>
      </span>
      <span className={`text-sm font-medium ${active ? 'text-[#f50]' : 'text-slate-400'}`}>{label}</span>
    </label>
  )
}
export default Switcher;