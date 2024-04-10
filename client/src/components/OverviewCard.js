import "../styles/OverviewCard.css"

const OverviewCard = ({ title, value }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

export default OverviewCard;