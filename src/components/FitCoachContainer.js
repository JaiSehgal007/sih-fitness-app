import { Link } from "react-router-dom";
const FitCoachContainer = () => {
  return (
    <div className="absolute top-[3192px] left bg-black w-screen h-[405px] overflow-hidden text-left text-5xl text-white font-leading-tight-text-sm-font-normal">
      <div className="absolute top-[72px] left-[calc(50%_-_600px)] w-[1200px] flex flex-row items-start justify-between">
        <div className="w-[301px] flex flex-col items-start justify-start gap-[16px]">
          <img
            className="relative w-[52px] h-[36.4px]"
            alt=""
            src="/vector6.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.04em] leading-[150%] font-semibold">
              
            FitCoach
            </div>
            <div className="relative text-base leading-[150%] inline-block w-[497.08px]">
              FitCoach is an AI-powered fitness app that provides personalized
              training regimes, expert guidance, real-time feedback and competitiveness to help
              users achieve their fitness goals.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[72px] text-sm">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.08em] uppercase font-semibold">
              Company
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray1-300">
              <div className="relative">Blog</div>
              <div className="relative">Careers</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.08em] uppercase font-semibold">
              Services
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray1-300">
              <div className="relative">Development</div>
              <div className="relative">Marketing</div>
              <div className="relative">Tokenization</div>
              <div className="relative">{`Consulting & Advisory`}</div>
              <div className="relative">Community Management</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.08em] uppercase font-semibold">
              Legal
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray1-300">
              <div className="relative">Terms of Service</div>
              <div className="relative">Privacy Policy</div>
              <div className="relative">Cookies Policy</div>
              <div className="relative">Data Processing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[308.5px] left-[calc(50%_-_600.5px)] box-border w-[1201px] h-px border-t-[1px] border-solid border-snow-300" />
      <div className="absolute top-[341px] left-[calc(50%_-_600px)] w-[1200px] flex flex-row items-center justify-between text-sm text-gray1-300">
        <div className="relative inline-block w-[297px] shrink-0">
          © 2023 FitCoach Inc. All rights reserved.
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <img
            className="relative rounded-81xl w-[33px] h-[33px]"
            alt=""
            src="/frame-41.svg"
          />
          <img
            className="relative rounded-81xl w-[33px] h-[33px]"
            alt=""
            src="/frame-42.svg"
          />
          <img
            className="relative rounded-81xl w-[33px] h-[33px]"
            alt=""
            src="/frame-43.svg"
          />
          <img
            className="relative rounded-81xl w-[33px] h-[33px]"
            alt=""
            src="/frame-44.svg"
          />
          <img
            className="relative rounded-81xl w-[33px] h-[33px]"
            alt=""
            src="/frame-45.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FitCoachContainer;
