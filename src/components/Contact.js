import React from "react";

export default function Contact() {
  return (
    <div>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Type Your Suggestion</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button type="button" className="btn btn-secondary">Submit</button>
    </div>
  );
}
