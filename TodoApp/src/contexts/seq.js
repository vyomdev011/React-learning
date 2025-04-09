import { createContext,useState } from "react";

 const [seq, setSeq] = useState(0);
//   const seqcounter = () => {
//     setSeq((prev) => prev + 1)
//   }
 export const SeqContext = createContext({ seq, setSeq });

