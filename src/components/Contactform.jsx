import IconArrow from "../assets/iconoir_arrow-tr.svg";
function Contactform() {
  return (
    <div className="w-full flex flex-col justify-between ">
      <label className="text-black text-[15px] font-semibold">
        Stay up to Date
      </label>
      <div className="flex flex-row w-full ">
        <input
          className="pr-8 border-b border-gray text-gray sm:text-[2rem] font-bold outline-none sm:placeholder:text-[2rem] leading-12 placeholder:font-bold placeholder:text-gray flex-1"
          placeholder="Enter your email address"
        />
        <button className="-ml-[30px] mb-1">
          <img src={IconArrow} />
        </button>
      </div>
    </div>
  );
}

export default Contactform;
