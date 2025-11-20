import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const loanTypes = [
  "All",
  "Car Loan",
  "Home Loan",
  "Business Loan",
  "Personal Loan",
  "Bike Loan",
  "Credit Card Loan",
  "Gold Loan",
];

const Applications=()=> {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const backendURL = "https://win-association-full.onrender.com";

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    const res = await axios.get(`${backendURL}/api/loans`);
    setApps(res.data);
  };

  const filteredApps = apps.filter((app) => {
    const searchable = `
      ${app._id}
      ${app.applicantName}
      ${app.companyName}
      ${app.loanAmount}
      ${app.loanType}
      ${app.email}
      ${app.mobileNumber}
      ${app.purpose}
      ${app.city}
      ${app.pincode}
      ${new Date(app.createdAt).toLocaleDateString()}
    `.toLowerCase();

    const matchesSearch = searchable.includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      app.loanType?.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="applications-page">

      <h2 className="page-title">Loan Applications</h2>

      <div className="applications-top">

        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, company, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {loanTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </select>

      </div>

      <div className="applications-table-box">
        <table className="applications-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Applicant</th>
              <th>Company</th>
              <th>Loan Amount</th>
              <th>Loan Type</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredApps.map((app) => (
              <tr key={app._id}>
                <td>{app._id}</td>
                <td>{app.applicantName}</td>
                <td>{app.companyName}</td>
                <td>{app.loanAmount}</td>
                <td>{app.loanType}</td>
                <td>{new Date(app.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
export default Applications;
