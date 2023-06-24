import "./RequestCard.styles.css";
import { Link } from "react-router-dom";

const RequestCard = ({ id, title, price, city, country, image }) => {
  const imgUrl = `${process.env.REACT_APP_DOMAIN}/${image}`;

  return (
    <Link to={`/requests/${id}`} className="request-card fc">
      <div className="fc" style={{ justifyContent: "start", width: "100%" }}>
        <h5>{title}</h5>
      </div>
      <div className="fc" style={{ justifyContent: "start", width: "100%" }}>
        <p>$ {price}</p>
      </div>
      <img src={imgUrl} alt="" />
      <p style={{ fontWeight: "700", alignSelf: "center" }}>
        {city}, {country}
      </p>
    </Link>
  );
};

export default RequestCard;
