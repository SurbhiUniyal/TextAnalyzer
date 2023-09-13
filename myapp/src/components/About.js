import React from 'react';

export default function About(props){
  let mystyle={
    color: props.mode==='dark'?"white":"black",
    backgroundColor: props.mode==='dark'?"#343a40":"white",
    border: '1px solid' ,
    borderColor: props.mode==='dark'?"white":"#343a40"

  }

    return(
      <div className='container' >
      <h1 style={{color: props.mode==='dark'?"white":"black"}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" style={mystyle}>
      <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, voluptate?</strong>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" style={mystyle} >
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia perferendis soluta iure reiciendis vero enim.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" style={mystyle}>
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Easy to use
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos asperiores inventore exercitationem adipisci aliquam commodi numquam temporibus nobis voluptas quis.</strong>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
    )


}
