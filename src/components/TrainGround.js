import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import socketIO from 'socket.io-client';
const API = "http://localhost:3001"

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
    width: 400,
    color: "#b3a69f",
    background: "#1f2838",
  },
  back: {
    position: "fixed",
    bottom: 0,
    right: 0
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

function TrainGround() {
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let socket;
  let pose = null;
  const [count, setCount] = React.useState(0);
  const [accuracy, setAccuracy] = React.useState(0);
  const [feedback, setFeedback] = React.useState("");
  const [isFinished, setIsFinished] = React.useState(false);
  const {exercise} = useParams();
  let camera = null;
  const countTextbox = useRef(null);
  // recieve on feedback event after 500ms
  // if finished excercise close camera and medapipe
  useEffect(() => {
    if(!isFinished) return;
    if(camera){
      camera.close();
       camera = null;
    }
    if(pose) pose.close();
    alert("Finished, Returning to dashboard");
    // disconnect
    window.location.href = "/main";
  },
  [
    isFinished
  ]);

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;
      socket.emit('train', 0,JSON.stringify(position));
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

      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
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
    socket = socketIO.connect(`${API}/ws`,
    );
    socket.on('feedback', (feedback) => {
      // console.log("count ", state.count);
      const jsonFeedback = JSON.parse(feedback);
      // setState({
      //   ...jsonFeedback,
      // });
      setCount(jsonFeedback.count);
      setAccuracy(jsonFeedback.accuracy);
      setFeedback(jsonFeedback.feedback);
      if(jsonFeedback.finished) setIsFinished(true);
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

          if(webcamRef.current) await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  },[]);
 

  return (
    <div>
      <div style={styles.selectBox}>
      {(() => {
        if (exercise === "bicepCurls") {
          return (
            <h1>Bicep Curls</h1>
          )
        } else if (exercise === "squats") {
          return (
            <h1>Squats</h1>
          )
        } else if (exercise === "pushups") {
          return (
            <h1>Pushups</h1>
          )
        } else {
          return (
            <h1>Crunches</h1>
          )
        }
      })()}
        <div style={{ top: 50 }}>
          <h1>Count</h1>
          <input
            variant="filled"
            value={count}
            textAlign="center"
            style={{ height: 50, fontSize: 40, width: 80 }}
          />
          <br></br>
          <br></br>

          <p>
            <h1>Feedback</h1>
            <h2>{feedback}</h2>
          </p>
          <p>
            <h1>Accuracy</h1>
            <h2>{accuracy}</h2>
          </p>
        </div>
      </div>
      <Webcam ref={webcamRef} style={styles.webcam} />
      <canvas ref={canvasRef} style={styles.webcam} />
      <div style={styles.back}>
        <Link to="/">
          <button size="large" variant="contained"  style={{backgroundColor:'#b3a69f',fontWeight:'bold'}}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TrainGround;
