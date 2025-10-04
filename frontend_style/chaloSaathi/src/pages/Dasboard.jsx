
import React, { useContext, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Wallet,
  CalendarCheck,
  Star,
  HelpCircle,
  LogOut,
  Camera,
  Settings,
  Bell,
  User
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import RideMatch from "./RideMatch";

import { AuthContext } from "../components/AuthContext";


export default function Dashboard() {
  const { user: authUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // LOCAL profile state (mirrors authUser when available)
  const [user, setUser] = useState({
    username: authUser?.username || "",
    email: authUser?.email || "",
    phone: "",
    photo: null,
  });

  // Load saved profile from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("saathi_profile_${authUser.id}") || "null");
    if (saved) setUser((p) => ({ ...p, ...saved }));
    else setUser((p) => ({ ...p, username: authUser?.username || "Saathi", email: authUser?.email || "" }));
  }, [authUser]);

  // Avatar preview
  const [avatarPreview, setAvatarPreview] = useState(user.photo || null);
  useEffect(() => {
    setAvatarPreview(user.photo || null);
  }, [user.photo]);

  const fileRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  // Profile completion: fields filled count
  const completionScore = () => {
    let score = 0;
    if (user.username) score += 25;
    if (user.email) score += 25;
    if (user.phone) score += 25;
    if (user.photo) score += 25;
    return score;
  };

  const stats = [
    { icon: <Car size={20} />, label: "Total Rides", value: "120+" },
    { icon: <Wallet size={20} />, label: "Wallet", value: "₹850" },
    { icon: <Star size={20} />, label: "Rating", value: "4.9★" },
    { icon: <CalendarCheck size={20} />, label: "Upcoming", value: "2" },
  ];

  const actions = [
    { label: "Book Ride", path: "/ride-match", className: "action-yellow" },
    { label: "My Rides", path: "/my-rides", className: "action-outline" },
    { label: "Wallet", path: "/wallet", className: "action-yellow-strong" },
    { label: "Support", path: "/support", className: "action-muted" },
  ];

  // Handlers
  const handleLogout = () => {
  // localStorage.removeItem("saathi_profile"); // <-- clear previous profile
  logout?.();
  navigate("/");
};


  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setUser((u) => ({ ...u, photo: reader.result }));
      localStorage.setItem("saathi_profile", JSON.stringify({ ...user, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const triggerFile = () => {
    fileRef.current?.click();
  };

  const handleSaveProfile = () => {
    localStorage.setItem("saathi_profile", JSON.stringify(user));
    setEditing(false);
  };

  const handleResetProfile = () => {
    localStorage.removeItem("saathi_profile");
    setUser({ username: authUser?.username || "Saathi", email: authUser?.email || "", phone: "", photo: null });
    setEditing(false);
  };

  return (
    <div className="db-root">
      {/* Topbar */}
      <header className="db-topbar">
        <div className="brand">
          <motion.div className="logo" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            Saathi
          </motion.div>
          <span className="tagline">Ride. Relax. Repeat.</span>
        </div>

        <div className="top-actions">
          <button className="icon-btn" title="Notifications">
            <Bell size={18} />
          </button>

          <div className="profile-wrapper">
            <button
              className="profile-btn"
              onClick={() => setDropdownOpen((s) => !s)}
              aria-expanded={dropdownOpen}
            >
              <div className={`avatar ${avatarPreview ? "" : "avatar-placeholder"}`}>
                {avatarPreview ? <img src={avatarPreview} alt="avatar" /> : <User size={18} />}
              </div>
              <div className="profile-meta">
                <div className="profile-name">{user.username || "Saathi"}</div>
                <div className="profile-email">{user.email || "no-email@example.com"}</div>
              </div>
            </button>

            {dropdownOpen && (
              <motion.div
                className="profile-dropdown"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="dropdown-top">
                  <div className="dropdown-avatar">
                    {avatarPreview ? <img src={avatarPreview} alt="avatar" /> : <User size={28} />}
                  </div>
                  <div className="dropdown-info">
                    <div className="dd-name">{user.username || "Saathi"}</div>
                    <div className="dd-email">{user.email || "no-email@example.com"}</div>
                  </div>
                </div>

                <button
                  className="dd-action"
                  onClick={() => {
                    setEditing(true);
                    setDropdownOpen(false);
                  }}
                >
                  <Camera size={16} /> Edit Profile
                </button>

                <Link to="/profile/settings" className="dd-action">
                  <Settings size={16} /> Settings
                </Link>

                <div className="dd-divider" />

                <button className="dd-logout" onClick={handleLogout}>
                  <LogOut size={16} /> Logout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="db-main">
        <aside className="left-panel">
          <div className="profile-card">
            <div className="profile-head">
              <div className={`big-avatar ${avatarPreview ? "" : "big-avatar-empty"}`}>
                {avatarPreview ? <img src={avatarPreview} alt="avatar" /> : <User size={36} />}
              </div>
              <div>
                <div className="big-name">{user.username || "Saathi"}</div>
                <div className="big-email">{user.email || "Add your email"}</div>
              </div>
            </div>

            <div className="completion">
              <div className="completion-top">
                <div>Profile Completion</div>
                <div className="comp-percent">{completionScore()}%</div>
              </div>
              <div className="comp-bar">
                <div className="comp-inner" style={{ width: `${completionScore()}%` }} />
              </div>

              <div className="profile-actions">
                <button className="btn small" onClick={() => { setEditing(true); }}>
                  <Camera size={14} /> Complete Profile
                </button>
                <button className="btn small outline" onClick={handleResetProfile}>
                  Reset
                </button>
              </div>
            </div>

            <div className="quick-links">
              <Link to="/my-rides" className="ql">My Rides</Link>
              <Link to="/wallet" className="ql">Wallet</Link>
              <Link to="/support" className="ql">Support</Link>
            </div>
          </div>

          <div className="help-card">
            <HelpCircle size={18} />
            <div>
              <div className="help-title">Need help?</div>
              <Link to="/support" className="help-link">Visit Support Center</Link>
            </div>
          </div>
        </aside>

        <section className="center-panel">
          <motion.h1 className="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Welcome back, <span className="accent">{user.username || "Saathi"}</span> 👋
          </motion.h1>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((s, i) => (
              <motion.div key={i} className="stat-card" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                <div className="stat-left">{s.icon}</div>
                <div className="stat-right">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick action buttons */}
          <div className="actions-grid">
            {actions.map((a, i) => (
              <motion.div key={i} className={`action ${a.className}`} whileHover={{ scale: 1.03 }}>
                <Link to={a.path}>{a.label}</Link>
              </motion.div>
            ))}
          </div>

          {/* Recent rides */}
          <div className="rides-card">
            <div className="rides-header">
              <div>Recent Rides</div>
              <Link to="/my-rides" className="small-link">See all</Link>
            </div>

            <div className="rides-list">
              <div className="ride-item"><Car size={18} /> <span className="ride-from">Kanpur</span> <span className="arrow">→</span> <span className="ride-to">Lucknow</span> <span className="ride-tag completed">Completed</span></div>
              <div className="ride-item"><Car size={18} /> <span>Airport Drop</span> <span className="ride-tag upcoming">Upcoming</span></div>
              <div className="ride-item"><Car size={18} /> <span>Delhi</span> <span className="arrow">→</span> <span>Agra</span> <span className="ride-tag cancelled">Cancelled</span></div>
            </div>
          </div>
        </section>


        {/* <aside className="right-panel">
          <div className="support-card">
            <div className="support-head">
              <HelpCircle size={20} />
              <div>
                <div className="support-title">Support</div>
                <div className="support-sub">Quick help & FAQ</div>
              </div>
            </div>
            <p className="support-text">Facing issues with a ride or payment? Reach out and we'll help — fast.</p>
            <Link to="/support" className="support-btn">Contact Support</Link>
          </div>

          <div className="promo-card">
            <div className="promo-head">Pro Tip</div>
            <div className="promo-text">Complete your profile to get priority support and 10% off on your next ride.</div>
          </div>
        </aside> */}
      </main>


      <footer className="support-footer">
            <div className="support-card">
              <div className="support-head">
                <HelpCircle size={20} />
                <div>
                  <div className="support-title">Support</div>
                  <div className="support-sub">Quick help & FAQ</div>
                </div>
              </div>
              <p className="support-text">
                Facing issues with a ride or payment? Reach out and we'll help — fast.
              </p>
              <Link to="/support" className="support-btn">
                Contact Support
              </Link>
            </div>

            <div className="promo-card">
              <div className="promo-head">Pro Tip</div>
              <div className="promo-text">
                Complete your profile to get priority support and 10% off on your next ride.
              </div>
            </div>
          </footer>
      {/* Profile Editor Modal-like area */}
      {editing && (
        <div className="editor-overlay" onClick={() => setEditing(false)}>
          <motion.div className="editor-card" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()}>
            <h3>Edit Profile</h3>

            <div className="editor-grid">
              <div className="editor-left">
                <div className="avatar-edit">
                  <div className={`big-edit-avatar ${avatarPreview ? "" : "big-avatar-empty"}`}>
                    {avatarPreview ? <img src={avatarPreview} alt="avatar" /> : <User size={36} />}
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                  <div className="editor-actions">
                    <button className="btn" onClick={triggerFile}><Camera size={14} /> Upload</button>
                    <button className="btn outline" onClick={() => { setUser((u) => ({ ...u, photo: null })); localStorage.setItem("saathi_profile", JSON.stringify({ ...user, photo: null })); }}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="editor-right">
                <label>Full Name</label>
                <input value={user.username} onChange={(e) => setUser((u) => ({ ...u, username: e.target.value }))} />

                <label>Email</label>
                <input value={user.email} onChange={(e) => setUser((u) => ({ ...u, email: e.target.value }))} />

                <label>Phone</label>
                <input value={user.phone} onChange={(e) => setUser((u) => ({ ...u, phone: e.target.value }))} />

                <div className="editor-footer">
                  <button className="btn" onClick={handleSaveProfile}>Save</button>
                  <button className="btn outline" onClick={() => setEditing(false)}>Cancel</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

