import techstack from "./Assets/techstack.png"

const ToolAndTechStackForm = () => {
  return (
    <div id="tools" className="absolute top-[1913px] left-[0px] bg-black w-screen h-[723px] overflow-hidden flex flex-col p-[120px] box-border items-center justify-center text-center text-31xl text-white font-leading-tight-text-sm-font-normal">
      <div className="flex flex-col items-center justify-start gap-[64px]">
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <div className="relative tracking-[-0.03em] leading-[110%] font-semibold">
            Tools and Tech stack
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[36px] text-base text-lavenderblush">
          <img
            className="relative rounded-3xs w-[1200px] h-[360px] overflow-hidden shrink-0"
            alt=""
            src={techstack}
            style={{width: 1050}}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolAndTechStackForm;
