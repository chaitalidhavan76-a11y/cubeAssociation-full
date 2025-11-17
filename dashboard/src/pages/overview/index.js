import React, { useEffect, useState } from "react";
import { FaFileAlt, FaUsers, FaClipboardCheck } from "react-icons/fa";
import RecentQueries from "../../components/recentQuery";
import RecentApplications from "../../components/recentApplications";
import axios from "axios";

export default function Overview() {
  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);

  const backendURL = "http://localhost:5000";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apps = await axios.get(`${backendURL}/api/loans`);
    const cons = await axios.get(`${backendURL}/api/contact`);

    setApplications(apps.data);
    setContacts(cons.data);
  };

  return (
    <div className="overview-page">

      <h2 className="overview-title">Dashboard Overview</h2>
      <p className="overview-subtitle">Quick summary of activity</p>

      <div className="overview-cards">

        <div className="overview-card">
          <div className="icon-box"><FaFileAlt /></div>
          <div>
            <h3>Total Applications</h3>
            <p className="number">{applications.length}</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon-box green"><FaUsers /></div>
          <div>
            <h3>Total Contacts</h3>
            <p className="number">{contacts.length}</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="icon-box blue"><FaClipboardCheck /></div>
          <div>
            <h3>New Applications</h3>
            <p className="number">{applications.slice(-10).length}</p>
          </div>
        </div>

      </div>

      <div className="section-wrapper">
        <RecentApplications data={applications.slice(-5)} />
      </div>

      <div className="section-wrapper">
        <RecentQueries data={contacts.slice(-5)} />
      </div>

    </div>
  );
}
