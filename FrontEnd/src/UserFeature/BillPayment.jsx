import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./feature.css";

function BillPayment() {

  const [payment,setPayment]=useState("");

  function paymentMethodHandler(event) {
    setPayment(event.target.value);
  }
  return (
    <>
      <div className="scroll-pane">
        <form >
          <label htmlFor="billID">Bill ID</label>
          <input type="Text" id="billID" />
          <br />
          <label htmlFor="billAmount">Amount</label>
          <input type="Number" id="billAmount" /><br />

          <label>Payment Method</label>
          <select value={payment} onChange={(e)=>paymentMethodHandler(e)}>
            <option value="">Select Payment Method</option>
            <option value="Visa">Visa Card</option>
            <option value="Master">Master Card</option>
            <option value="Slip">Slip to pay at reception</option>
          </select>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default BillPayment;
