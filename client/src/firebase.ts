import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCU12aX4cMSVDBe6x7p6PHiX_h2cSyRHkI",
//   authDomain: "fir-react-image-uploads.firebaseapp.com",
//   databaseURL: "gs://fir-react-image-uploads.appspot.com",
//   projectId: "fir-react-image-uploads",
//   storageBucket: "fir-react-image-uploads.appspot.com",
//   messagingSenderId: "514360265964",
//   appId: "1:514360265964:web:8e6201279b65d6362ce9c9",
//   measurementId: "G-BWJQPEKDQ5",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD1uhEV3wD1VZydU_RHRc8hRl9_jmlsBrA",
  authDomain: "codingmoon-f6eb0.firebaseapp.com",
  projectId: "codingmoon-f6eb0",
  storageBucket: "codingmoon-f6eb0.appspot.com",
  messagingSenderId: "722118963564",
  appId: "1:722118963564:web:a7d62bfce786587bd64349",
  measurementId: "G-65HHKDS69W",
};

initializeApp(firebaseConfig);
const storage = getStorage();
export { storage };
