import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "./Table";

const Campaigns = () => {
  return (
    <div className=" container mx-auto py-16">
      <div className="flex-between mb-8">
        <div className="text-2xl font-semibold">Campaigns</div>
        <div>
          <Link to="create" className="btn-primary">
            Add Campaign
          </Link>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Campaigns;
