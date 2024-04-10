import "../styles/Overview.css";

import OverviewCard from "../components/OverviewCard";

function Overview() {
  return (
    <div className="overview-page-container">
      <h1>Overview</h1>
      <div className="overview-grid">
        <div className="overview-row">
            <OverviewCard title="Title 1" value="Value 1" />
            <OverviewCard title="Title 1" value="Value 1" />
        </div>
        <div className="overview-row">
            <OverviewCard title="Title 1" value="Value 1" />
            <OverviewCard title="Title 1" value="Value 1" />
        </div>
        <div className="overview-row">
            <OverviewCard title="Title 1" value="Value 1" />
            <OverviewCard title="Title 1" value="Value 1" />
        </div>
       

      </div>
    </div>
  );
}

export default Overview;
