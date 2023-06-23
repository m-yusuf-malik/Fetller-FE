import "./RequestCard.styles.css";
import images from "../../assets/images";

const RequestCard = ({ title }) => {
  const { proImg } = images;
  return (
    <div className="request-card fc">
      <div className="fc" style={{ justifyContent: "start", width: "100%" }}>
        <h5>{title}</h5>
      </div>
      <div className="fc" style={{ justifyContent: "start", width: "100%" }}>
        <p>$ 34</p>
      </div>
      <img src={proImg} alt="" />
      <p style={{ fontWeight: "700", alignSelf: "center" }}>Lahore, Pakistan</p>
    </div>
  );
};

export default RequestCard;
