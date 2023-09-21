import ContainerCardForm from "./ContainerCardForm";

const DeveloperCard = () => {
  return (
    <div className="absolute top-[2556px] left-[0px] bg-black w-screen h-[636px] overflow-hidden flex flex-col pt-[120px] px-[120px] pb-[138px] box-border items-center justify-center gap-[10px] text-center text-31xl text-white font-leading-tight-text-sm-font-normal">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <b className="relative tracking-[-0.03em] leading-[110%]">
            Developers
          </b>
          <div className="relative text-sm leading-[150%] inline-block w-[561.59px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="w-[1091px] h-[257px] flex flex-row flex-wrap items-center justify-between text-[31.74px]">
        <ContainerCardForm productDimensions="/vector.svg" />
        <ContainerCardForm productDimensions="/vector1.svg" />
        <ContainerCardForm productDimensions="/vector2.svg" />
        <ContainerCardForm productDimensions="/vector3.svg" />
        <ContainerCardForm productDimensions="/vector4.svg" />
        <ContainerCardForm productDimensions="/vector5.svg" />
      </div>
    </div>
  );
};

export default DeveloperCard;
