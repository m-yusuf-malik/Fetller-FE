import "./DivTable.styles.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const DPTableHeader = () => {
  return (
    <div className="div-table__table-header fc" style={{ border: "1px solid" }}>
      <h4>Day</h4>
      <h4>Breakfast</h4>
      <h4>Lunch</h4>
      <h4>Dinner</h4>
      <h4></h4>
    </div>
  );
};

const DPTableRow = () => {
  return (
    <div className="div-table__table-row fc">
      <p>Day</p>
      <p>Breakfast</p>
      <p>
        Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken
        breast, 1 tablespoon shredded low-fat cheddar, diced grilled veggies (2
        tablespoons onion, 1/4 cup diced zucchini, 1/2 cup bell pepper), 1
        teaspoon chopped cilantro, and 1 tablespoon low-fat vinaigrette.
      </p>
      <p>Dinner</p>
      <Link to="">
        <Button
          text="View details"
          style={{
            backgroundColor: "var(--primary-bg-color)",
            color: "var(--white-black-text-color)",
            padding: ".75em 2em",
          }}
        />
      </Link>
    </div>
  );
};

const DPTableBody = () => {
  return (
    <div>
      <DPTableRow />
      <DPTableRow />
      <DPTableRow />
    </div>
  );
};

const DivTable = () => {
  return (
    <div className="div-table__table-conatiner">
      <DPTableHeader />
      <DPTableBody />
    </div>
  );
};

export default DivTable;
