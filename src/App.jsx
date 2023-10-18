import "./App.css";
import { useState, useEffect } from "react";
import { ProverbExplorer } from "./components/ProverbExplorer";
import axios from "axios";
function App() {
  const [proverbs, setProverbs] = useState([]);
  useEffect(() => {
    const fetchProverbs = async () => {
      const response = await axios.get("https://652e79f70b8d8ddac0b17387.mockapi.io/proverbs");
      console.log(response.data);
      setProverbs(response.data);
    };
    fetchProverbs();
  }, []);

  return (
    <div>
      <div className="h-20 mb-3 p-3 rounded-b-lg bg-[#bad7f2]">Hi</div>
      <div className="pl-10">
        {proverbs.map((proverb, index) => (
            <div key={proverb.id} className={`bg-[#D0CFEC] shadow-lg p-2 m-2 border-slate-300 h-20 cursor-pointer hover:scale-95 hover:border-black transition-transform border-2 rounded-lg w-1/2`}>
            {proverb.title}
        </div>
        ))}
     </div>
    </div>
  );
}

export default App;
