import Component3 from "./Component3";

function Component2(props) {
  return (
    <div>
      <Component3 {...props} />
    </div>
  );
}

export default Component2;