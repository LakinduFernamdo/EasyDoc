import React from "react";
import "./feature.css";

function ReportUpload() {
  const reportType = ["CRT", "MRI"];
  const reportList = reportType.map((report) => (
    <option key={report.indexOf}>{report}</option>
  ));

  return (
    <>
      <div className="scroll-pane">
        <form>
          <label>Report Type</label>
          <select id="">{reportList}</select>
          <br />
          <label>File</label>
          <input type="file" /><br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ReportUpload;
