import "./BodyContainer.css";

function BodyContainer({ children }) {
  return (
    <div className="body-Container">
      {children}
    </div>
  );
}

export default BodyContainer;