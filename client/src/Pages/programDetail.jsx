import React, { useEffect } from 'react';
import { useParams } from 'react-router';
// import event01 from '../Assets/Images/event01.jpg';

function ProgramDetail() {
   const { programSlug } = useParams();
   useEffect(() => {
   }, [programSlug]);

   return (
     <main>
       <div className="container">
         <div className="programDetail-block">
           <div className="img-wrap">
             {/* <img src={event01} alt="" /> */}
           </div>
           <span className="card-name">{programSlug}</span>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Unde aliquam eligendi sunt laborum, inventore est adipisci
             fugiat eum, dolores quia tempora ut fuga? Dolorem reiciendis
             delectus nemo pariatur. Ut, aliquid.
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Unde aliquam eligendi sunt laborum, inventore est adipisci
             fugiat eum, dolores quia tempora ut fuga? Dolorem reiciendis
             delectus nemo pariatur. Ut, aliquid.
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Unde aliquam eligendi sunt laborum, inventore est adipisci
             fugiat eum, dolores quia tempora ut fuga? Dolorem reiciendis
             delectus nemo pariatur. Ut, aliquid.
           </p>
         </div>
       </div>
     </main>
   );
}

export default ProgramDetail;
