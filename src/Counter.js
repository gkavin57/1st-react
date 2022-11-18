import { useState } from "react";

export function Counter() {
  let [like, setLike] = useState(0);
  let [dlike, setDlike] = useState(0); 
   
  const likeStyles={ 
    color:like>10? "green":"blue"
  } 
   
  const disLikeStyles={ 
    color:dlike>10? "green":"blue"
  }
  return (
    <section> 
      {(like-dlike)>10 ?<h3>you are awesome</h3> : null}
      <div>
        <button style={likeStyles} onClick={() => setLike(like + 1)}>👍 {like}</button>
      </div>

      <div>
        <button style={disLikeStyles} onClick={() => setDlike(dlike + 1)}>❤ {dlike}</button>
      </div>
    </section>
  );
} 
 

