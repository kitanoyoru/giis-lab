import { Canvas } from "./components/Canvas";

const App = () => {
  return (
    <div>
      <Canvas width={500} height={500} pixelSize={25} showGrid />
    </div>
  );
};

export default App;
