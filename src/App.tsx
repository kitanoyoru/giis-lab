import { SideBar } from "./components/SideBar/SideBar";
import { Canvas } from "./components/Canvas";

const App = () => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <Canvas width={800} height={800} />
      </div>
    </div>
  );
};

export default App;
