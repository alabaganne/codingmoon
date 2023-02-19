import * as React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CreateAd from "./steps/Step1";
import Stepper from "./Stepper";

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
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className=" container mx-auto gap-4  mt-20 relative w-2/4">
      <Stepper
        components={[<p>step1</p>, <p>step2</p>, <p>step3</p>]}
        onSave={() => console.log("save")}
      />
    </div>
  );
}
