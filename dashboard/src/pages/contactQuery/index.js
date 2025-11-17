import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

export default function Queries() {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");

  const backendURL = "http://localhost:5000";

  useEffect(() => {
    loadQueries();
  }, []);

  const loadQueries = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/contact`);
      setQueries(res.data);
    } catch (err) {
      console.error("Failed to load queries");
    }
  };

  const filteredQueries = queries.filter((q) => {
  const text = `
    ${q.name}
    ${q.email}
    ${q.number}
    ${q.loan}
    ${q.message}
    ${new Date(q.createdAt).toLocaleDateString()}
  `.toLowerCase();

  return text.includes(search.toLowerCase());
});


  return (
    <div className="applications-page">
      
      <h2 className="page-title">User Queries</h2>

      <div className="applications-top">

        {/* SEARCH BAR ONLY */}
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search name, email, mobile or message…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      <div className="applications-table-box">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Query ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Loan Type</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredQueries.map((q) => (
              <tr key={q._id}>
                <td>{q._id}</td>
                <td>{q.name}</td>
                <td>{q.email}</td>
                <td>{q.number}</td>
                <td>{q.loan}</td>
                <td className="truncate">{q.message}</td>
                <td>{new Date(q.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
