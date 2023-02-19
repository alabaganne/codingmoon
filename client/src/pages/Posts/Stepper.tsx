import { FC, ReactNode, useState } from "react";

interface IProps {
  components: ReactNode[];
  functions?: (() => void)[];
  onSave: () => void;
  validations?: boolean[];
}

const Stepper: FC<IProps> = ({
  components,
  onSave,
  functions,
  validations,
}) => {
  const [step, setStep] = useState(0);
  return (
    <div>
      {components.map((component, i) => (
        <div key={i} className={` ${i != step ? "w-0 hidden" : "w-full"}`}>
          {component}
        </div>
      ))}
      <div className=" flex items-center justify-between mt-12">
        {step != 0 && (
          <button
            className=" btn-primary py-2 px-6"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        {step == components.length - 1 ? (
          <button onClick={onSave} className=" ml-auto btn-primary py-2 px-6">
            Save
          </button>
        ) : (
          <button
            className={`btn-primary py-2 px-6 ml-auto`}
            onClick={() => {
              setStep(step + 1);
              if (functions) functions[step]();
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
