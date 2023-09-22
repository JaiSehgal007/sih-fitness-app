import ButtonSecondary from "./ButtonSecondary";

const Header = () => {
  return (
    <div className="absolute top-[0px] left-[calc(50%_-_599.5px)] box-border w-[1200px] flex flex-col py-6 px-0 items-start justify-start text-left text-sm text-gray-400 font-leading-tight-text-sm-font-normal border-b-[1px] border-solid border-gray1-100">
      <div className="self-stretch flex flex-row items-center justify-between z-[0] text-5xl text-snow-100">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/dumbbell.svg"
            />
            <div className="relative tracking-[-0.04em] leading-[150%] font-semibold">
              <a href="/" style={{textDecoration: 'none', color: 'white'}}>FitCoach</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[32px] text-center text-sm text-white">
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]"><a href="#features" style={{textDecoration: 'none', color: 'white', fontSize: 18, margin:21}}>Features</a></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]"><a href="#tools" style={{textDecoration: 'none', color: 'white', fontSize: 18, margin:21}}>Technologies</a></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]"><a href="#dev" style={{textDecoration: 'none', color: 'white', fontSize: 18, margin:21}}>Contact</a></div>
          </div>
        </div>
        <ButtonSecondary
          text="Sign In"
          buttonSecondaryWidth="140px"
          buttonSecondaryHeight="40px"
          buttonSecondaryPosition="relative"
          backgroundBorder="1px solid #fff"
          textColor="#fff"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[70px] left-[393px] rounded-md bg-gray-700 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] overflow-hidden hidden flex-col items-start justify-start z-[1] border-[1px] border-solid border-gray-600">
        <div className="w-56 flex flex-col py-1 px-0 box-border items-start justify-start">
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start gap-[6px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/presentationchartline.svg"
            />
            <div className="relative leading-[125%]">Audience</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start gap-[6px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/cube.svg"
            />
            <div className="relative leading-[125%]">Marketing Automation</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start gap-[6px] text-primary-500">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/cog.svg"
            />
            <div className="flex-1 relative leading-[125%]">Creative Tools</div>
            <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start gap-[6px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/trendingup.svg"
            />
            <div className="relative leading-[125%]">{`Insights & Analytics`}</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start gap-[6px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/chartpie.svg"
            />
            <div className="relative leading-[125%]">Demographics</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start gap-[6px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/phone.svg"
            />
            <div className="relative leading-[125%]">Contact Profiles</div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[150px] left-[626px] rounded-md bg-gray-700 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] overflow-hidden hidden flex-col items-start justify-start z-[2] border-[1px] border-solid border-gray-600">
        <div className="flex flex-col py-1 px-0 items-start justify-start">
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">Marketing CRM</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">Signup Forms</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">Segmentation</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">Dynamic Content</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">A/B Testing</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">Behavioral Targeting</div>
          </div>
          <div className="self-stretch flex flex-row py-2 px-4 items-center justify-start">
            <div className="relative leading-[125%]">Integrations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
