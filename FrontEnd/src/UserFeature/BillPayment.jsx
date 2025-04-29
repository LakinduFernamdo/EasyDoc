import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    pId: "",
    appId: "",
    billDate: "",
    paymentMethod: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      const response = await axios.post("http://localhost:5000/auth/user-account/user-payment", formData);
      console.log("Payment successful:", response.data);
      alert("Payment proceed successfully !");
      
    } catch (error) {
      alert("Payment failed ! Try again");
    }
  };

  return (
    <div className="scroll-pane">
      <form onSubmit={handleSubmit}>
        <label htmlFor="pId">P_ID</label>
        <input
          type="text"
          id="pId"
          name="pId"
          value={formData.pId}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="appId">App_ID</label>
        <input
          type="text"
          id="appId"
          name="appId"
          value={formData.appId}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="billDate">Date</label>
        <input
          type="date"
          id="billDate"
          name="billDate"
          value={formData.billDate}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="paymentMethod">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="">Select Payment Method</option>
          <option value="Visa">Visa Card</option>
          <option value="Master">Master Card</option>
          <option value="Slip">Slip to pay at reception</option>
        </select>
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
