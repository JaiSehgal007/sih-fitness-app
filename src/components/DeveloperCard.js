import ContainerCardForm from "./ContainerCardForm";
import sb from "./Assets/sb.jpg"
import sg from "./Assets/sg.webp"
import rm from "./Assets/rm.jpeg"
import js from "./Assets/js.jpg"
import km from "./Assets/km.jpg"
import rav from "./Assets/rav.jpg"

const DeveloperCard = () => {
  return (
    <div id="dev" className="absolute top-[2556px] left-[0px] bg-black w-screen h-[636px] overflow-hidden flex flex-col pt-[120px] px-[120px] pb-[138px] box-border items-center justify-center gap-[10px] text-center text-31xl text-white font-leading-tight-text-sm-font-normal">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <b className="relative tracking-[-0.03em] leading-[110%]">
            Developers
          </b>
          <div className="relative text-[25px] m-5 leading-[150%] inline-block w-[561.59px]">
            Meet our stellar software squad!
          </div>
        </div>
      </div>
      <div className="w-[1091px] h-[257px] m-8 flex flex-row flex-wrap items-center justify-between text-[31.74px]">
        <ContainerCardForm productDimensions="/vector.svg" name="Sushmit" person={sb}/>
        <ContainerCardForm productDimensions="/vector1.svg" name="Shubham" person={sg}/>
        <ContainerCardForm productDimensions="/vector2.svg" name="Ranjan" person={rm}/>
        <ContainerCardForm productDimensions="/vector3.svg" name="Jai" person={js}/>
        <ContainerCardForm productDimensions="/vector4.svg" name="Kshipra" person={km}/>
        <ContainerCardForm productDimensions="/vector5.svg" name="Ravindra" person={rav}/>
      </div>
    </div>
  );
};

export default DeveloperCard;
