import * as React from "react";
import CreateAd from "./steps/CreateAd";
import Stepper from "./Stepper";
import ChoosePlatform from "./steps/ChoosePlatform";

const steps: React.ReactNode[] = [<CreateAd />, <CreateAd />, <CreateAd />];

export default function CreatePost() {
  function _renderStepContent(step: number) {
    switch (step) {
      case 0:
        return <p>step1</p>;
      case 1:
        return <p>step2</p>;
      case 2:
        return <p>step3</p>;
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <div className=" container mx-auto gap-4  my-20 relative w-3/4">
      <Stepper
        components={[<CreateAd />, <ChoosePlatform />, <p>step3</p>]}
        onSave={() => console.log("save")}
      />
    </div>
  );
}
