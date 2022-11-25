import React from 'react'

function Alert(props) {
  return (
   props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.Alert.type}</strong> : {props.Alert.msg} 
  </div>
  )
}

export default Alert





{/* <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode} />
<Alert Alert ={alert}/>
<div className="container my-4">
  <Textform showalert={showalert} heading ="Enter The Text Below To Analize" mode={mode }/>
  <About />
</div> */}