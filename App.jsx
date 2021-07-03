import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function dynamic(data){
    return (
    <Entry 
    key={data.id}
    emoji={data.emoji}
    name={data.name}           
    des={data.meaning}
     />
     );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(dynamic)}
      </dl>
    </div>
  );
}

export default App;
