import { Link } from "react-router-dom";

import images from "../../assets/images";

import "./RequestCard.styles.css";

const RequestCard = ({ id, title, price, city, country, image }) => {
  const imgUrl = `${process.env.REACT_APP_DOMAIN_URL}${image}`;
  const { defaultRequest } = images;

  return (
    <Link to={`/requests/${id}`} className="request-card fc">
      <div className="fc" style={{ justifyContent: "start", width: "100%" }}>
        <h5>{title}</h5>
      </div>
      <div className="fc" style={{ justifyContent: "start", width: "100%" }}>
        <p>$ {price}</p>
      </div>
      {image ? (
        <img src={imgUrl} alt={title} />
      ) : (
        <img src={defaultRequest} alt="default" />
      )}
      <p style={{ fontWeight: "700", marginTop: "1em" }}>
        {city}, {country}
      </p>
    </Link>
  );
};

export default RequestCard;
