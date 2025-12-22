import Component2 from "./Component2";

function Component1({ a, b, c, d, e, f }) {
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <h4>This is prop e: {e}</h4>
      <h4>This is prop f: {f}</h4>

      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

export default Component1;