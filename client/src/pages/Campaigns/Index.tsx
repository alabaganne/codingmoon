import axios from "axios";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Status from "./Status";
import Table, { fakeRows } from "./Table";

const Campaigns = () => {
  const [rows, setRows] = React.useState<any>([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/campaign/").then((res) => {
      console.log(res);
      setRows([...generateData(res.data.data)]);
    });
  }, []);

  const generateData = (data: any) => {
    return data.map((d: any, i: number) => ({
      id: d._id,
      name: d.name,
      status: <Status isActive={d.isActive} />,
      budget: d.budget,
      reach: d.reach,
      numberOfPosts: 0,
      targets: fakeRows[i].targets,
    }));
  };

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
      <Table
        labels={[
          "Campaign",
          "Status",
          "Budget",
          "Reach",
          "Number of Posts",
          "Targets",
        ]}
        rows={rows}
      />
    </div>
  );
};

export default Campaigns;
