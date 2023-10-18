import { ProverbExplorer } from "./components/ProverbExplorer";
import { Questions } from "./components/Questions";
import { Navbar } from "./components/Navbar";
function App() {


  return (
    <div className="h-screen">
      <div className="h-20 mb-3 p-3 rounded-b-lg bg-[#bad7f2]">Hi</div>
    <Navbar />
    <Questions />
    <ProverbExplorer />
      </div>
    
  );
}

export default App;