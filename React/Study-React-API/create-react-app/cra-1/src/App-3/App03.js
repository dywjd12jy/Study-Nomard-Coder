import { useEffect, useState } from "react";
const Hello = () => {
  const byfn = () => {
    console.log("bye :(");
  };
  const hiFn = () => {
    console.log("created :)");
    return byfn;
  };

  useEffect(hiFn, []);
  return <h1>Hello</h1>;
};
// const Hello = () => {
//   useEffect(() => {
//     console.log("created :)");
//     return () => console.log("destroyed :(");
//   }, []);
//   return <h1>Hello</h1>;
// };
const App03 = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <h1>Cleanup func</h1>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default App03;
