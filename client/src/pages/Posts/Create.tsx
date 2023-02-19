import * as React from "react";
import CreateAd from "./steps/CreateAd";
import Stepper from "./Stepper";
import ChoosePlatform from "./steps/ChoosePlatform";
import { useMutation } from "react-query";
import axios from "axios";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

// const steps: React.ReactNode[] = [<CreateAd />, <CreateAd />, <CreateAd />];

export default function CreatePost() {
  const [imageUrl, setImageUrl] = React.useState("");
  const [description, setDescription] = React.useState("Description");
  const [channels, setChannels] = React.useState(["Facebook", "Instagram"]);
  // const createPost = function _renderStepContent(step: number) {
  //   switch (step) {
  //     case 0:
  //       return <p>step1</p>;
  //     case 1:
  //       return <p>step2</p>;
  //     case 2:
  //       return <p>step3</p>;
  //     default:
  //       return <div>Not Found</div>;
  //   }
  // };
  const navigate = useNavigate();

  const createPost = useMutation(
    "createPost",
    () =>
      axios.post("http://localhost:8000/api/post", {
        imageUrl,
        description,
        channels,
        campaignId: "232",
      }),
    {
      onSuccess: () => {
        navigate("/campaigns/create/success");
      },
    }
  );

  return (
    <div className=" container mx-auto gap-4  my-20 relative w-3/4">
      <Stepper
        components={[
          <CreateAd
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            description={description}
          />,
          <ChoosePlatform />,
        ]}
        onSave={() => createPost.mutate()}
      />
    </div>
  );
}
