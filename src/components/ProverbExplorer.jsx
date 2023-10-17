
export const ProverbExplorer = (proverbs) => {
    console.log(proverbs);
    
    return (
      <div>
        {proverbs.map((proverb) => (
            <div key={proverb.id} className="p-3 border-black border-2 text-xl rounded-lg">
            {proverb.title}
        </div>
        ))}
     </div>
    );

}