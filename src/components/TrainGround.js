import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import socketIO from "socket.io-client";
const API = "http://localhost:3001";

function angleBetweenThreePoints(pos) {
  var a = Math.pow(pos[1].x - pos[0].x, 2) + Math.pow(pos[1].y - pos[0].y, 2);
  var b = Math.pow(pos[1].x - pos[2].x, 2) + Math.pow(pos[1].y - pos[2].y, 2);
  var c = Math.pow(pos[2].x - pos[0].x, 2) + Math.pow(pos[2].y - pos[0].y, 2);

  //angle in degrees
  var resultDegree =
    (Math.acos((a + b - c) / Math.sqrt(4 * a * b)) * 180) / Math.PI;
  return resultDegree;
}

const styles = {
  webcam: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 0,
    right: 800,
    top: 200,
    textAlign: "center",
    zIndex: 9,
    width: 860,
    height: 645,
  },
  countBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1100,
    right: 0,
    top: 600,
    width: 400,
    height: 100,
  },
  selectBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 900,
    right: 0,
    top: 200,
    textAlign: "center",
    color: "#f6ea98",
    background:  "#e26972",

  },
  insBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 900,
    right: 0,
    top: 600,
    textAlign: "center",
    color: "#f6ea98",
    background:  "#e26972",

  },
  back: {
    position: "fixed",
    bottom: 0,
    right: 0,
  },
};

const exrInfo = {
  bicepCurls: {
    index: [12, 14, 16],
    ul: 160,
    ll: 50,
  },
  squats: {
    index: [24, 26, 28],
    ul: 170,
    ll: 50,
  },
  pushups: {
    index: [12, 14, 16],
    ul: 160,
    ll: 80,
  },
  crunches: {
    index: [12, 24, 26],
    ul: 130,
    ll: 50,
  },
};
const exerciseInstructions = {
  bicepCurls: {
    title: "Bicep Curls",
    instructions: [
      "Stand with your feet hip-width apart, holding a dumbbell in each hand with your arms at your sides and your palms facing forward.",
      "Keeping your elbows close to your sides, slowly curl both weights toward your shoulders.",
      "Pause, then slowly lower the weights back to the starting position.",
    ],
  }
}
function TrainGround() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let socket;
  let pose = null;
  const [count, setCount] = React.useState(0);
  const [accuracy, setAccuracy] = React.useState(0);
  const [feedback, setFeedback] = React.useState("");
  const [visibility, setVisibility] = React.useState(0);
  const [limit, setLimit] = React.useState(-1);
  const [isFinished, setIsFinished] = React.useState(false);
  const [warning, setWarning] = React.useState("");
  const { exercise } = useParams();
  let camera = null;
  const countTextbox = useRef(null);
  // recieve on feedback event after 500ms
  // if finished excercise close camera and medapipe
  useEffect(() => {
    if (!isFinished) return;
    if (camera) {
      camera.close();
      camera = null;
    }
    if (pose) pose.close();
    alert("Finished, Returning to dashboard");
    // disconnect
    window.location.href = "/main";
  }, [isFinished]);
  const dummyObject = {
    userId: "650e4912b33d630700b9a225",
    eId: "650e4bea318fe44f3a3c0d14",
  };
  function onResult(results) {
    if (results.poseLandmarks) {
      // get confidence score
      // console.log(results);
      const position = results.poseLandmarks;
     
      // setTimeout(() => {

      // }, 500);
      // console.log("here pos ", position)
      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      // //ratios between 0-1, covert them to pixel positions
      const upadatedPos = [];
      const indexArray = exrInfo[exercise].index;
      let vis = 1;
      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
        vis = Math.min(vis,position[indexArray[i]].visibility);
      }
      setVisibility(vis);
      if(vis>=0.9){
        setWarning("");
        socket.emit(
          "train",
          JSON.stringify(dummyObject),
          JSON.stringify(position)
        );
      }
      else {
         setWarning("Not visible!");
      }

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(upadatedPos[i].x, upadatedPos[i].y);
        canvasCtx.lineTo(upadatedPos[i + 1].x, upadatedPos[i + 1].y);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "white";
        canvasCtx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }
      canvasCtx.font = "40px aerial";
      canvasCtx.restore();
    }
  }

  useEffect(() => {
    console.log("rendered");
    socket = socketIO.connect(`${API}/ws`);
    socket.on("feedback", (feedback) => {
      // console.log("count ", state.count);
      const jsonFeedback = JSON.parse(feedback);
      // setState({
      //   ...jsonFeedback,
      // });
      setCount(jsonFeedback.count);
      setAccuracy(jsonFeedback.accuracy);
      setFeedback(jsonFeedback.feedback);
      setLimit(jsonFeedback.limit);
      if(jsonFeedback.finished) {
        socket.disconnect();
      }
      if (jsonFeedback.finished) setIsFinished(true);
      else setIsFinished(false);
    });
    pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4.1624666670/${file}`;
      },
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (webcamRef.current)
            await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center ">
      <header className="flex flex-row justify-around w-full gap-2 m-4" >
      <Link to="/">
        <button 
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Leave
        </button>
      </Link>

      <div className="flex flex-col justify-center w-full text-center">
        <h1 className=" text-31xl"> Training Ground 
        </h1>
        <h2 className="text-3xl ">{exercise.toLocaleUpperCase()} 💪</h2>
      </div>
      </header>
      <div>
        <Webcam ref={webcamRef} style={styles.webcam} />
        <canvas ref={canvasRef} style={styles.webcam} />
        <div style={styles.back}>
          <Link to="/">
            <button
              size="large"
              variant="contained"
              style={{ backgroundColor: "#b3a69f", fontWeight: "bold" }}
            >
              Back
            </button>
          </Link>
        </div>
      </div>

      <div style={styles.selectBox} className="p-9 w-1/3 flex gap-2 flex-col
       space-x-4 space-y-4
      ">
        <div 
        // className="flex flex-col justify-center items-center"
        >
        <h1
        className="text-3xl mb-5"
        >Your Performance </h1>
          <h1>Reps: <span>{count}/{limit}
          </span>
          </h1>
          <p>
            <h1>Feedback: 
              <span>{feedback || "No feedback"}</span>
            </h1>
          </p>
          <p>
            <h1>Accuracy : 
            <span>{
              Math.round(accuracy * 100) / 100
            }</span>
            </h1>
            <h1>Visibility : 
            <span>{
              Math.round(visibility * 100) / 100
            }</span>
            </h1>
            
          </p>
        </div>
        
      </div>
      {
              warning && <h1
              className="text-red-500 text-lg"  
              >Warning &nbsp;: &nbsp;
            <span>{warning}</span>
            </h1>
            }

      <div style={styles.insBox} className="p-9 w-1/3 flex gap-2 flex-col
       space-x-4 space-y-4
      ">
        <div style={{ top: 50 }} 
        // className="flex flex-col justify-center items-center"
        >
          <h1>
            Instructions
          </h1>
          <p>
              {
                exerciseInstructions[exercise].instructions.map((instruction, index) => {
                  return <p key={index}>{instruction}</p>
                }
                )
               }
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default TrainGround;
