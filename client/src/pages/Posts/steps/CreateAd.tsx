import React, { useState } from "react";
import image from "../../../assets/icons/image.svg";
import video from "../../../assets/icons/video.svg";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import Loader from "../../../components/shared/Loader";
import { Lorem } from "react-lorem-generator";

const CreateAd = () => {
  const [percent, setPercent] = useState(0);
  const [images, setImages] = React.useState<any>([]);
  const [filename, setFilename] = React.useState("Upload");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [text, setText] = useState<string>("");

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore provident dolore eos aspernatur voluptatum nesciunt quia tempora, maxime quaerat nam iusto ea in aut esse illo odit. Animi, dolores? Nemo adipisci hic dignissimos dolore necessitatibus harum voluptatum blanditiis, officia et unde sunt? Necessitatibus aut, eius placeat numquam porro modi sint quaerat quae esse totam molestiae eligendi nostrum sed quis! Possimus, labore? Delectus doloremque aut vero cumque veniam quo impedit libero, ipsam quisquam eveniet totam quibusdam dolor explicabo. Deserunt doloremque omnis incidunt, ipsam eum cupiditate quibusdam quas optio autem nihil? Ullam dignissimos eos nulla incidunt est enim, culpa esse iusto vel, consequatur quisquam debitis a deserunt eaque minima nam beatae temporibus eius saepe iste ratione quidem quam rerum sit? Dignissimos!";

  const handleGenerate = (e: any) => {
    e.preventDefault();
    setText("");
    const words = description.split(" ");
    let index = 7;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setText(words.splice(0, index).join(" "));
        index = index + 10;
      }, (i + 1) * 1000);
    }
  };

  const handleUpload = async (e: any) => {
    // const name = e.target.files[0].name;
    // setFilename(name);
    let imgs: any = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      imgs = [...imgs, newImage];
      // setImages((prevState: any) => [...prevState, newImage]);
    }
    console.log(imgs);
    console.log("button clicked:", images);
    setLoading(true);
    e.preventDefault();
    imgs.map((image: any) => {
      setLoading(true);
      // const uploadTask = ref(`images/${image.name}`).put(image);
      const storageRef = ref(storage, `/images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          ); // update progress
          console.log(percent);
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setImageUrl(url);
            setLoading(false);
            setImages([]);
            setFilename("Upload");
          });
        }
      );
    });
  };

  const handleChange = async (e: any) => {
    console.log(e.target.files);
    const name = e.target.files[0].name;
    setFilename(name);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState: any) => [...prevState, newImage]);
    }
    setTimeout(async () => {
      await handleUpload(e);
    }, 5000);
  };

  return (
    <form>
      <div className=" flex justify-between gap-3">
        {!imageUrl ? (
          loading ? (
            <div className=" w-1/4 aspect-square rounded bg-[#393939] flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <label
              htmlFor="inputFile"
              className=" bg-[#393939]  flex items-center justify-center flex-col cursor-pointer gap-1 bg-s50 w-1/4 aspect-square rounded-xl"
            >
              <img src={image} alt="image" className=" w-15 h-15" />
              <p className=" text-s300 text-xs mt-2">import image</p>
              <input
                id="inputFile"
                type={"file"}
                className=" hidden"
                onChange={handleUpload}
              />
            </label>
          )
        ) : (
          <img
            src={imageUrl}
            className=" object cover w-1/4 aspect-square rounded-xl"
          />
        )}
      </div>
      <div className="  mt-6">
        <p className=" text-base ml-2 mb-3">
          Write down keywords for the AI to help you :
        </p>
        <div className=" flex gap-4">
          <input
            type="text"
            className=" bg-dark-standard flex-1 outline-none rounded px-6 py-3"
          />
          <button
            className=" bg-dark-standard px-8 rounded"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="  mt-6">
        <p className=" text-base ml-2 mb-3">Write the ad description :</p>
        <div className=" flex gap-4">
          <textarea
            value={text}
            rows={5}
            className=" bg-dark-standard flex-1 outline-none rounded px-6 py-3"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateAd;
