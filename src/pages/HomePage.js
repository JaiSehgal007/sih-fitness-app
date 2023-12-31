import Header from "../components/Header";
import ToolAndTechStackForm from "../components/ToolAndTechStackForm";
import DeveloperCard from "../components/DeveloperCard";
import FitQuestContainer from "../components/FitQuestContainer";
import { Link } from "react-router-dom";
function geAuth(){
  const data=localStorage.getItem('auth')
  if(data)
  {
    const parseData=JSON.parse(data)
    return parseData;
  }
  return null;
}
const HomePage = () => {
  const auth = geAuth();
  console.log("explore auth ",auth)
  return (
    <div className="relative bg-black w-screen h-[1284px] text-center text-[14.34px] text-white font-leading-tight-text-sm-font-normal">
      <div className="absolute top-[calc(50%_-_578px)] left-[calc(50%_-_608.5px)] h-[1284px] flex flex-col items-center justify-center gap-[34.42px]">
        <div className="rounded-[71.7px] overflow-hidden flex flex-row py-[7.170467853546143px] px-[14.340935707092285px] items-start justify-start border-[0.7px] border-solid border-white">
          <div className="relative leading-[150%] uppercase">
            Catalysing Change
          </div>
        </div>
        <div className="relative w-[1208px] h-[252px] text-[114.73px]">
          <div className="movingBg" />
          {/* <div className="movingBg2" />
          <div className="movingBg3" /> */}
          <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[110%] inline-block w-[1208px] z-10">
            <b>{`Personalized `}</b>
            <span className="font-extralight">
              training re-imagined with AI
            </span>
          </div>
        </div>
        <div className="relative text-[25.22px] leading-[150%] inline-block w-[1037.1px] higherZIndex">
          FitCoach is an AI-powered fitness app that provides personalized
          training regimes, expert guidance, real-time feedback and competitiveness to help
          users achieve their fitness goals.
        </div>
        <div className="rounded-[143.41px] bg-white flex flex-row py-[17.209121704101562px] px-[28.68187141418457px] items-center justify-center gap-[11.47px] text-left text-[22.95px] text-black">
          <img
            className="relative w-[28.68px] h-[28.68px] overflow-hidden shrink-0 hidden"
            alt=""
            src="/fire.svg"
          />
          <div className="relative leading-[150%] font-medium higherZIndex">
            <Link to={!auth ? "/login" : "/main"} 
            
            style={{textDecoration: 'none', color: 'black'}}>
            Let’s Explore

            </Link>
          </div>
          <img
            className="relative w-[28.68px] h-[28.68px] overflow-hidden shrink-0 hidden"
            alt=""
            src="/fire1.svg"
          />
          <img
            className="relative w-[44.46px] h-[34.42px] overflow-hidden shrink-0"
            alt=""
            src="/materialsymbolsarrowrightalt.svg"
          />
        </div>
        <div className="h-[552px] flex flex-col items-center justify-center">
          <img
            className="relative rounded-[16.49px] w-[874.5px] h-[491.61px] object-cover"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </div>
      <Header />
      <div id="features" className="absolute top-[1284px] left-[0px] bg-black w-screen h-[629px] overflow-hidden flex flex-col py-32 px-[314px] box-border items-center justify-center text-[52.9px]">
        <div className="flex flex-col items-center justify-start gap-[84.65px]">
          <div className="flex flex-col items-center justify-center gap-[31.74px]">
            <b className="relative tracking-[-0.03em] leading-[110%]">
              A Complete Fitness Trainer
            </b>
            <div className="relative text-[18.52px] leading-[150%] inline-block w-[1073.23px]">
              Like having a personal virtual trainer, FitQuest provides 24/7 real-time monitoring of body postures, ensuring correct form during exercise and thus preventing injuries. FitBot AI chatbot tracks workout routines and provides personalized diet recommendations based on their age, gender and current level. FitQuest creates a motivating environment by ranking users within their age and gender category, providing a healthy competition that encourages exercise and fitness. Users receive badges, trophies, and accolades.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[79.36px] text-left text-[31.74px]">
            <div className="h-[177.23px] flex flex-col items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[15.87px]">
                <div className="relative rounded-[264.52px] bg-247 w-[59.52px] h-[60.84px] overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[110%] font-semibold">
                    24/7
                  </div>
                  <div className="relative text-[18.52px] leading-[150%] text-gray-400">
                    Personal virtual trainer
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[15.87px]">
                <div className="relative rounded-[264.52px] bg-chatbot w-[59.52px] h-[60.84px] overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[110%] font-semibold">
                    FitBot
                  </div>
                  <div className="relative text-[18.52px] leading-[150%] text-gray-400">
                    Personalized diet recommendation
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[177.23px] flex flex-col items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[15.87px]">
                <div className="relative rounded-[264.52px] bg-accurate w-[59.52px] h-[60.84px] overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[110%] font-semibold">
                    Accurate
                  </div>
                  <div className="relative text-[18.52px] leading-[150%] text-gray-400">
                  Pose detection
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[15.87px]">
                <div className="relative rounded-[264.52px] bg-game w-[59.52px] h-[60.84px] overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[110%] font-semibold">
                    Gamification
                  </div>
                  <div className="relative text-[18.52px] leading-[150%] text-gray-400">
                    Receive badges for hitting milestones and play games
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[177.23px] flex flex-col items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[15.87px]">
                <div className="relative rounded-[264.52px] bg-yoga w-[59.52px] h-[60.84px] overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[110%] font-semibold">
                    Yoga
                  </div>
                  <div className="relative text-[18.52px] leading-[150%] text-gray-400">
                    For mental health
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[15.87px]">
                <div className="relative rounded-[264.52px] bg-cam w-[59.52px] h-[60.84px] overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[110%] font-semibold">
                    Compatibility
                  </div>
                  <div className="relative text-[18.52px] leading-[150%] text-gray-400">
                    Any camera-equipped device
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToolAndTechStackForm />
      <DeveloperCard />
      <FitQuestContainer />
    </div>
  );
};

export default HomePage;
