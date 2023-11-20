import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`we are`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Web Developers",
          "Mobile Developers",
          "Web3 Developers",
          "Backend Developers",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
