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
    <>
      <div className="p-3 bg-red-800 "> Hi </div>
      <div>
        {proverbs.map((proverb) => (
            <div key={proverb.id} className="p-3 border-black border-2 text-xl rounded-lg">
            {proverb.title}
        </div>
        ))}
     </div>
    </>
  );
}

export default App;
