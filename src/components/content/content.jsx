import React, { useState } from 'react'
import './contact.css'
export default function Content() {
 
    let [topName, setTopName] = useState(0);
    let [topAge, setTopAge] = useState(0);
    let [topEmail, setTopEmail] = useState(0);
    let [topPass, setTopPass] = useState(0);
    

    function onChangeInputName(e){
      console.log("changed")
       setTopName(topName ='-35px')

       if(e.nativeEvent.data == null){
        setTopName(topName ='0px')
       }
       
    }
    function onChangeInputAge(e){
      console.log("changed")
       setTopAge(topAge ='-35px')
       if(e.nativeEvent.data == null){
        setTopAge(topAge ='0px')
       }
    }
    function onChangeInputEmail(e){
      console.log("changed")
       setTopEmail(topEmail ='-35px')
       if(e.nativeEvent.data == null){
        setTopEmail(topEmail ='0px')
       }
    }
    function onChangeInputPass(e){
      console.log("changed")
       setTopPass(topPass ='-35px')
       if(e.nativeEvent.data == null){
        setTopPass(topPass ='0px')
       }
    }

  return (

    <>
      <div className='contact'>
        <h5>contact section</h5>
        <div className="icon-div d-flex gap-3 align-items-center justify-content-center">
          <div className="white-line"></div>
          <i className="fa-solid fa-star"></i>
          <div className="white-line"></div>
        </div>
        <div  className="contact-form  m-auto">
          <div className='input-div d-flex flex-column m-3 mt-5 mb-4'>
            <label for="name" className='label' style={{top: topName}}  >User Name</label>
            <input type="text"   onChange={onChangeInputName }  className="input form-control" id="name" placeholder="UserName" />
          </div>

          <div className='input-div d-flex flex-column m-3 mt-5 mb-4'>
            <label for="age" className='label'style={{top: topAge}}  >User Age</label>
            <input type="text"   onChange={onChangeInputAge}  className="input form-control" id="age" placeholder="UserAge" />
          </div>

          <div className='input-div d-flex flex-column m-3 mt-5 mb-4'>
            <label for="email" className='label'style={{top: topEmail}}  >User Email</label>
            <input type="email"   onChange={onChangeInputEmail}  className="input form-control" id="email" placeholder="UserEmail" />
          </div>

          <div className='input-div d-flex flex-column m-3 mt-5 mb-4'>
            <label for="pass" className='label'style={{top: topPass}}  >User password</label>
            <input type="password"   onChange={onChangeInputPass}  className="input form-control" id="pass" placeholder="UserPass" />
          </div>
        <button className=' my-btn'>Send a message</button>
        </div>
      </div>

    </>
  )
}
