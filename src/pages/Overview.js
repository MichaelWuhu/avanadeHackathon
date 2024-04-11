import "../styles/Overview.css";
import chart from "../assets/chart.png";

function Overview() {
  return (
    <div className="overview-page-container">
      <h1>Overview</h1>
      <div className="overview">
        <div className="symptoms">
          <h1>Symptoms</h1>
          <div className="listed-symptoms">
            <ul>
              <li>symptom 1</li>
              <li>symptom 2</li>
              <li>symptom 3</li>
            </ul>
            <ul>
              <li>symptom 4</li>
              <li>symptom 5</li>
              <li>symptom 6</li>
            </ul>
          </div>
        </div>

        <div className="mood-chart-container">
          <h1>Mood</h1>
          <img src={chart} alt="" />
        </div>

        <div className="remedies">
          <h1>Remedies</h1>
          <div className="listed-remedies">
            <ul>
              <li>remedy 1</li>
              <li>remedy 2</li>
              <li>remedy 3</li>
            </ul>
            <ul>
              <li>remedy 4</li>
              <li>remedy 5</li>
              <li>remedy 6</li>
            </ul>
          </div>
        </div>
        {/* <div className="overview-row">
            <OverviewCard title="Phase of Pregnancy" value="Value 1" />
            <OverviewCard title="Social Interation Monitor" value="Value 1" />
        </div>
        <div className="overview-row">
            <OverviewCard title="Sleep and Eating Habit" value="Value 1" />
            <OverviewCard title="Symptom Checklist" value="Value 1" />
        </div>
        <div className="overview-row">
            <OverviewCard title="Mood Tracker" value="Value 1" />
            <OverviewCard title="Physical Pain Log" value="Value 1" />
        </div> */}
      </div>
    </div>
  );
}

export default Overview;
