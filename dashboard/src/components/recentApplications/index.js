import React from "react";

const RecentApplications = ({ data }) => {
  return (
    <div className="recent-box">
      <h3 className="recent-title">Recent Applications</h3>

      <table className="recent-table">
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Applicant</th>
            <th>Company</th>
            <th>Loan Amount</th>
            <th>Loan Type</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>

              <td>
                <div className="name">{item.applicantName}</div>
                <div className="email">{item.email}</div>
              </td>

              <td>{item.companyName}</td>

              <td>{item.loanAmount}</td>

              <td>{item.loanType}</td>

              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentApplications;
