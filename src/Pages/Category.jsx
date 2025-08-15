import CategoCard from "../components/CategoCard.jsx";
import categoryData from "../db/json/category.json";
import "../css/category.scss";

export default function Category() {
  return (
    <>
      <div className="category-container">
        {Object.keys(categoryData).map((key) => (
          <CategoCard key={key} category={key} data={categoryData[key]} />
        ))}
      </div>
    </>
  );
}
