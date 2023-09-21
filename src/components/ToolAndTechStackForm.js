const ToolAndTechStackForm = () => {
  return (
    <div className="absolute top-[1913px] left-[0px] bg-black w-screen h-[723px] overflow-hidden flex flex-col p-[120px] box-border items-center justify-center text-center text-31xl text-white font-leading-tight-text-sm-font-normal">
      <div className="flex flex-col items-center justify-start gap-[64px]">
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <div className="relative tracking-[-0.03em] leading-[110%] font-semibold">
            Tools and Tech stack
          </div>
          <div className="relative text-sm leading-[150%] inline-block w-[561.59px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[36px] text-base text-lavenderblush">
          <div className="flex flex-row items-center justify-start gap-[96px]">
            <div className="rounded-381xl bg-gray1-200 flex flex-row py-2.5 px-5 items-start justify-start text-white">
              <div className="relative tracking-[-0.03em]">Frontend</div>
            </div>
            <div className="relative tracking-[-0.03em]">Backend</div>
            <div className="relative tracking-[-0.03em]">Databases</div>
            <div className="relative tracking-[-0.03em]">
              Mobile development
            </div>
            <div className="relative tracking-[-0.03em]">ML</div>
            <div className="relative tracking-[-0.03em]">Emerging Tech</div>
          </div>
          <img
            className="relative rounded-3xs w-[1200px] h-[360px] overflow-hidden shrink-0"
            alt=""
            src="/frame-42152.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ToolAndTechStackForm;
