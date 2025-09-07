import { useState } from "react";
import { NavLink } from "react-router-dom";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile>({
    name: "Prashant Kumar",
    email: "prashant@example.com",
    phone: "+91 9876543210",
    address: "123, Civil Lines, Mathura, Uttar Pradesh",
    avatar: "https://i.pravatar.cc/150?img=12", // Random avatar
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully ✅");
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h5 className="mb-0">{user.name}</h5>
              <small className="text-muted">{user.email}</small>
              <hr />
              <NavLink to="/orders" className="btn btn-outline-primary w-100 mb-2">
                View Orders
              </NavLink>
              <button className="btn btn-outline-danger w-100">Logout</button>
            </div>
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
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={user.phone}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={user.address}
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
