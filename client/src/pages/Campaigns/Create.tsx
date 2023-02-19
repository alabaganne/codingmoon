import React from "react";

const CreateCampaign = () => {
  const submitCampaign = () => {
    console.log("submit campaign");
  };

  return (
    <div className="py-20 flex-center">
      <div className="card w-[512px]">
        <div className="text-2xl font-medium">Create Campaign</div>
        <div className="text-gray-400">
          Fill out the form below to create a new campaign.
        </div>
        <form className="mt-6" action="">
          <div className="form-group">
            <label htmlFor="name" className="required">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="e.g. Spoon"
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input
              type="text"
              id="budget"
              className="form-control"
              placeholder="Value in TND"
            />
          </div>
          <div className="form-group">
            <label htmlFor="isActive">Status</label>
            <select name="isActive" id="isActive" className="form-control ">
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn-primary py-3 px-5" onClick={submitCampaign}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
