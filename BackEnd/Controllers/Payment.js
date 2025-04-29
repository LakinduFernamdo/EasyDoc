import { HospitalDataBase } from "../Config/DatabaseConnection.js";

export const PaymentCreate = async (req, res) => {
  const { pId, appId, billDate, paymentMethod, amount } = req.body;
  const now = new Date();
  const currentTime = now.toTimeString().split(' ')[0]; // e.g., "10:20:00"

  try {
    const insertPay = `
      INSERT INTO public."BillsData" 
      ("P_ID", "App_ID", "Date", "PaymentMethod", "Amount", "Time") 
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    
    const values = [pId, appId, billDate, paymentMethod, amount, currentTime];

    await HospitalDataBase.query(insertPay, values);

    res.status(201).json({ message: "Payment created successfully" });
    console.log("Payment created successfully");

  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({ message: error.message });
  }
};
