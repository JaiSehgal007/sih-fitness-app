import { useMemo } from "react";

function clearAuth(){
    localStorage.removeItem('auth');
    window.location.reload();
}
const ButtonSecondary = ({
  text,
  isLogin,
  buttonSecondaryWidth,
  buttonSecondaryHeight,
  buttonSecondaryPosition,
  backgroundBorder,
  textColor,
}) => {
  const buttonSecondaryStyle = useMemo(() => {
    return {
      width: buttonSecondaryWidth,
      height: buttonSecondaryHeight,
      position: buttonSecondaryPosition,
    };
  }, [buttonSecondaryWidth, buttonSecondaryHeight, buttonSecondaryPosition]);

  const backgroundStyle = useMemo(() => {
    return {
      border: backgroundBorder,
    };
  }, [backgroundBorder]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);
  function onClick(){
    if(isLogin){
      clearAuth();
    }
    else {
      window.location.href="/login";
    }
  }
  return (
    <div
      className="w-[200px] h-[60px] text-center text-lg text-black font-roboto"
      style={buttonSecondaryStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs box-border border-[1px] border-solid border-black"
        style={backgroundStyle}
      />
      <div
        className="absolute w-[calc(100%_-_33px)] top-[calc(50%_-_12px)] left-[17px] leading-[134.77%] flex items-center justify-center"
        style={textStyle}
      >

        <a onClick={onClick} style={{textDecoration: 'none', color: 'white'}} className="hover:cursor-pointer">
          {isLogin ? "Logout" : "Login"}
        </a>
      </div>
    </div>
  );
};

export default ButtonSecondary;
