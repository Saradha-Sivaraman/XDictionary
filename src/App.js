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
    <div >
      
        <h1>Dictionary App</h1>
        <form>
       <input type="text" id="Searchword"
                    placeholder="search for a word"
                    value={searchWord} onChange={(event)=>setsearchWord(event.target.value)}
                    />
       <button type="submit"  onClick={(e) =>
            //getMeaning(event);
            getMeaning(e)
       }>Search</button>
         </form>
         
          <h3>Definition:</h3>
           
            {response} 

{/* {isError? (<div><h3>Definition:{response} </h3></div>) : (<div><h3>Definition:"Word not found in the dictionary."</h3></div>)
}     */}
   
     
     </div>
     
     
    
  );
}

export default App;