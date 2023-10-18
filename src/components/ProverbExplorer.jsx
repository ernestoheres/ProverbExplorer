import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faComment } from "@fortawesome/free-solid-svg-icons";


export const ProverbExplorer = () => {
  const [proverbs, setProverbs] = useState([]);
  const [proverbDetails, setProverbDetails] = useState([]);
  useEffect(() => {
    const fetchProverbs = async () => {
      const response = await axios.get(
        "https://652e79f70b8d8ddac0b17387.mockapi.io/proverbs"
      );
      console.log(response.data);
      setProverbs(response.data);
    };
    fetchProverbs();
  }, []);

  const showProverbDetails = (id) => {
    const fetchProverbById = async () => {
      const response = await axios.get(
        `https://652e79f70b8d8ddac0b17387.mockapi.io/proverbs/${id}`
      );
      setProverbDetails(response.data);
    };

    fetchProverbById();
  }

    return (
      <div className="h-screen">
      <div className="flex justify-between h-screen">
      <div className="flex flex-col justify-center pt-20 w-3/4 h-[85%]  overflow-y-scroll ">
        {proverbs.map((proverb) => (
          <div
            onClick={(e) => showProverbDetails(proverb.id, e)}
            key={proverb.id}
            className={`bg-[#D0CFEC] shadow-lg p-4  m-2 border-slate-300  cursor-pointer hover:scale-95 hover:border-black transition-transform border-2 rounded-lg `}
          >
            {proverb.title}
          </div>
        ))}
      </div>
      <div className="bg-slate-50  w-4/6 h-full ">
      <div className="bg-zinc-100 " >
       <div>
        <h2 className="text-2xl font-bold text-center">{proverbDetails.title}</h2>
       </div>
        <div className="text-center ">
        <div className="mb-20 pl-10 m-5">
          <p>{proverbDetails.description}</p>
          </div>
          <div className="flex justify-end bg-slate-100  pb-5 mt-5">
          <FontAwesomeIcon color="red" size="xl" className="px-2" icon={ faThumbsUp } />
          <FontAwesomeIcon color="blue" size="xl" className="px-2" icon={ faThumbsDown } />
          <FontAwesomeIcon color="blue" size="xl" className="px-2" icon={ faComment } />
          </div>
          </div>
          </div>
          <div className="bg-slate- flex flex-col place-items-center p-5">
          <div className="bg-zinc-200 w-1/2 rounded-2xl p-3 flex flex-col">

            <p className="self-start font-bold underline">mr.felix</p>
            <p >Very accurate</p>
          </div>

          </div>
         
      </div>

      </div>
      
    </div>
    );

        }