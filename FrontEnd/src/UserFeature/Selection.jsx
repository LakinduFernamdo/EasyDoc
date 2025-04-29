import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./feature.css";
import AppointmentHistory from "./AppointmentTable";
import AppointmentForm from "./AppointmentForm";
import BillPayment from "./BillPayment";
import ReportUpload from "./ReportUpload";

function Selection() {

  const [appointmentLeft,setAppointmentLeft]=useState("0vw");
  const [billLeft,setBillLeft]=useState("100vw");
  const [reportLeft,setReportLeft]=useState("200vw");
  const [appointmentHistoryLeft,setAppointmentHistoryLeft]=useState("300vw");

  function appointmentSlideChange() {
    setAppointmentLeft("0vw");
    setBillLeft("100vw");
    setReportLeft("200vw");
    setAppointmentHistoryLeft("300vw");
  }
  function billSlideChange() {
    setAppointmentLeft("-100vw");
    setBillLeft("0vw");
    setReportLeft("100vw");
    setAppointmentHistoryLeft("200vw");
  }
  function reportSlideChange() {
    setAppointmentLeft("-200vw");
    setBillLeft("-100vw");
    setReportLeft("0vw");
    setAppointmentHistoryLeft("100vw");
  }
  function historySlideChange() {
    setAppointmentLeft("-300vw");
    setBillLeft("-200vw");
    setReportLeft("-100vw");
    setAppointmentHistoryLeft("0vw");
  }

  return (
    <>
      <div className="selection">
        <ul
          className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
          id="pillNav2"
          role="tablist"
          style={{
            "--bs-nav-link-color": "var(--bs-white)",
            "--bs-nav-pills-link-active-color": "var(--bs-primary)",
            "--bs-nav-pills-link-active-bg": "var(--bs-white)",
          }}
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-5"
              onClick={() => appointmentSlideChange()}
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Make an appointment
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              onClick={() => billSlideChange()}
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Pay bills
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              onClick={() => reportSlideChange()}
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Upload a lab report
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              onClick={() => historySlideChange()}
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Appointment History
            </button>
          </li>
        </ul>
      </div>

      <div className="view-board">
        <div className="view-slide" id="appointment" style={{"left":appointmentLeft}}>
          <h3>Make an appointment</h3>
          <AppointmentForm/>
        </div>
        <div className="view-slide" id="bill_pay" style={{"left":billLeft}}>
          <h3>Pay bills</h3>
          <BillPayment/>
        </div>
        <div className="view-slide" id="lab_report" style={{"left":reportLeft}}>
          <h3>Upload Lab Report</h3>
          <ReportUpload/>
        </div>
        <div className="view-slide" id="appointmentHistory" style={{"left":appointmentHistoryLeft}}>
          <h3>Appointment History</h3>
          <AppointmentHistory/>
        </div>
      </div>
    </>
  );
}

export default Selection;
