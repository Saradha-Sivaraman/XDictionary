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
   {   
            dictionary.forEach(function(eleData) {
            word = eleData.word

          if (searchWord.toLowerCase()===word.toLowerCase()) {
            isError="true"
            meaning = eleData.meaning
            setIsError(true);
          // setResponse(meaning);
            console.log("response"+meaning);
        
          }

          if(isError)
            { 
              setResponse(meaning);
            }
            else
            {console.log("inside  else1");
            console.log(isError);
              setResponse("Word not found in the dictionary.");
            }
        
     })
    

   

     
   }
  return (
    
      <div>
        <h1>Dictionary App</h1>
       <form>
        <input type="text" id="searchword"
                    placeholder="Search for a word"
                    value={searchWord} onChange={(event)=>setsearchWord(event.target.value)}
                    />
       <button type="submit"  onClick={() => {
            getMeaning();
          }}>Search</button>
          </form>
          
          
          <h3>Definition:</h3>
           
            <p>{response} </p>

     </div>
     
     
    
  );
}

export default App;