import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string;
  isPhoneVerified?: boolean;
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Please login to view your profile.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data);

        // calculate progress
        let p = 50; // name + email base
        if (res.data.phone) p += 25;
        if (res.data.address) p += 25;
        setProgress(p);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile. Please try again.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // Save changes
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !user) return;

      const res = await axios.put(
        "http://localhost:5000/api/profile",
        {
          phone: user.phone,
          address: user.address,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(res.data);
      setEditMode(false);
      alert("Profile updated successfully ✅");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (loading) return <p className="text-center py-5">Loading profile...</p>;

  if (error) return <p className="text-center py-5 text-danger">{error}</p>;

  if (!user)
    return <p className="text-center py-5">No profile data available.</p>;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img
                src={user.avatar || "https://i.pravatar.cc/150?img=12"}
                alt="User Avatar"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h5 className="mb-0">{user.name}</h5>
              <small className="text-muted">{user.email}</small>
              <hr />
              <NavLink
                to="/orders"
                className="btn btn-outline-primary w-100 mb-2"
              >
                View Orders
              </NavLink>
              <button
                className="btn btn-outline-danger w-100"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </div>
          </div>

          {/* Profile Progress */}
          <div className="card shadow-sm mt-3 p-3">
            <h6>Profile Completion</h6>
            <div className="progress mb-2">
              <div
                className="progress-bar bg-success"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
            {progress < 100 && (
              <small className="text-muted">
                Complete your profile to get better experience 🚀
              </small>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-md-9">
          <div className="card shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Profile Information</h4>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? "Cancel" : "Edit"}
              </button>
            </div>
            <div className="card-body">
              {/* Profile Fields */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={user.name}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={user.phone || ""}
                  onChange={handleChange}
                  disabled={!editMode}
                />
                {user.isPhoneVerified ? (
                  <small className="text-success">✅ Verified</small>
                ) : (
                  <small className="text-danger">❌ Not Verified</small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={user.address || ""}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>

              {editMode && (
                <button className="btn btn-success" onClick={handleSave}>
                  Save Changes
                </button>
              )}
            </div>
          </div>

          {/* Change Password */}
          <div className="card shadow-sm mt-4">
            <div className="card-header">
              <h5 className="mb-0">Change Password</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input type="password" className="form-control" />
              </div>
              <button className="btn btn-primary">Update Password</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
