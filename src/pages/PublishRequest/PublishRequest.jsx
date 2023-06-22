import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import "./PublishRequest.styles.css";

const PublishRequest = () => {
  return (
    <>
      <Header />
      <main className="publish-request fc">
        <h2
          style={{ color: "var(--primary-text-color)", marginBottom: "5rem" }}
        >
          Publish Request
        </h2>
        <div className="login__form fc">
          <Input
            heading="Name"
            type="text"
            name="name"
            placeholder="VITA-FIT Sinus Nutrient"
            details=""
          />
          <div className="input-field fc">
            {<h6>Description</h6>}
            <textarea
              name="description"
              placeholder="Sinus Nutrient is a high potency formula containing various herbs
            and nutrients that help support healthy sinus function. As an ideal
            supplement during seasonal change, these ingredients also support a
            normal immune system and the body's natural defence mechanisms
            against allergens."
              style={{ height: "8.5em" }}
            ></textarea>
          </div>
          <Input
            heading="Address"
            type="text"
            name="address"
            placeholder="House # 23, Street # 76"
            details=""
          />
          <Input
            heading="City"
            type="text"
            name="city"
            placeholder="Oslo"
            details=""
          />
          <Input
            heading="Country"
            type="text"
            name="country"
            placeholder="Norway"
            details=""
          />
          <Input
            heading="Phone number"
            type="text"
            name="phone_number"
            placeholder="+4781632900"
            details=""
          />
          <Input
            heading="Price"
            type="text"
            name="price"
            placeholder="$ 120"
            details=""
          />
          <Button
            text="Publish"
            style={{
              backgroundColor: "var(--primary-bg-color)",
              color: "var(--white-black-text-color)",
              marginTop: "3rem",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PublishRequest;
