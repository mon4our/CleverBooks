

export const CardComp=({logo,title,desc})=>{
  return (
      <div
        className="block rounded-lg bg-[#082f49] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <img src={logo} class="size-16" />
        <h5
          className="mb-2 text-2xl font-medium leading-tight text-[#06b6d4] ">
          {title}
        </h5>
        <p className="mb-4 text-l text-base text-[#cffafe] ">
          {desc}
        </p>
      </div>
  );
}