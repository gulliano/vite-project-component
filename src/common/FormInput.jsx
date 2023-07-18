import React, { useState }  from 'react'

const FormInput = () => {

    const [myText, setMyText] = useState('');
    const [myNote, setMyNote] = useState(0);

    const send = () => { 

       setMyText('') ;  
     }

  /*  const handlerChange = (event) => {
        // event.target.value
        setMyText(event.target.value) ;
        console.log('event change' , event.target.value ) ; 

    }*/
  return (

    <div className="navbar bg-base-100">
  <div className="navbar-start">
  <input type="text" placeholder="Note du stagiaire"
      
       value={myNote}
      
      className="input input-bordered w-24 md:w-auto" />
  </div>
  <div className="navbar-center">
    <div className="form-control">
      <input type="text" placeholder="Ajouter un Stagiaire"
 
       value={myText}
      
      className="input input-bordered w-24 md:w-auto" />
    
    </div>
 
  </div>
  <div className="navbar-end">
  
  <button className='btn' onClick={send}>Ajouter</button>
  </div>
</div>
    
   
  )
}

export default FormInput