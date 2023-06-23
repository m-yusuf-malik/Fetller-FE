import "./BrowseRequests.styles.css";

import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import RequestCard from "../../components/RequestCard/RequestCard";

const Requests = () => {
  const requests = [
    {
      title: "He",
    },
    {
      title: "He",
    },
    {
      title: "He",
    },
    {
      title: "He",
    },
    {
      title: "He",
    },
    {
      title: "He",
    },
    {
      title: "He",
    },
    {
      title: "He",
    },
  ];

  return (
    <div className="fc requests-container">
      {requests && requests.map((request) => <RequestCard {...request} />)}
    </div>
  );
};

const BrowseRequests = () => {
  return (
    <>
      <Header />
      <main className="browse-requests fc">
        <h3>Nutrients Requests</h3>
        <div
          className="fc"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <select name="" id="">
            <option value="">Sort by</option>
            <option value="">New</option>
            <option value="">Price</option>
          </select>
          <input type="search" />
        </div>
        <Requests />
      </main>
      <Footer />
    </>
  );
};

export default BrowseRequests;
