// import { useState } from 'react'
// import React from 'react'
// export default function Components() 
// {
//   let [color, setColor] = useState("black");
//     const bg_changer = (color) => 
//   {
//      document.body.style.backgroundColor=color;
//      setColor(color)

//   };    
//   return (
//     <div>
//       {/* onClick={bg_changer("red")} == this calls fn immediately without btn clicked when page is rendered
//       remember onClick={() => bg_changer("red")}  this is required since onclick wants a fn to be returned   */}
//         <button onClick={() => bg_changer("red")} className="bg-red-500 mr-2">tailwind test</button>
//         <button onClick={() => bg_changer("blue")} className="bg-sky-500 mr-2">"tailwind test</button>
//         <button onClick={() => bg_changer("green")} className="bg-green-500 mr-2">"tailwind test</button>
//         <button onClick={() => bg_changer("yellow")} className="bg-yellow-500 mr-2">"tailwind test</button>
//         <button onClick={() => bg_changer("brown")} className="bg-brown-500 mr-2">"tailwind test</button>
//     </div>
//   )
// }