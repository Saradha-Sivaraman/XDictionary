import React, { useState } from "react";

function App() {

  

  const [searchWord, setsearchWord] = useState("");
  const [response,setResponse] = useState("");
  let [isError,setIsError] = useState(false);

  let word ="";
  let meaning ="";

 
  let dictionary =[

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

];

   function getMeaning(event)
   {   event.preventDefault();
        
          let findmeaning =   dictionary.find((element) => element.word.toLowerCase()===searchWord.toLowerCase() )

          console.log(findmeaning);

          if(findmeaning)
          {
            setResponse(findmeaning.meaning);
          }
          else
          {
            setResponse("Word not found in the dictionary.");

          }
      
   }
  return (
    <div >
      
        <h1>Dictionary App</h1>
        <form>
       <input type="text" id="Searchword"
                    placeholder="search for a word"
                    value={searchWord} onChange={(event)=>setsearchWord(event.target.value)}
                    />
       <button type="submit"  onClick={(e) => getMeaning(e)
       }>Search</button>
         </form>
         
          <h3>Definition:</h3>
           
            <p>{response} </p>

     
     </div>
     
     
    
  );
}

export default App;