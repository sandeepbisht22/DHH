import React, { useState, useEffect } from "react";
import profileImage from "../../resources/images/defaultProfile.png";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../state/actions";

const User = () => {
  const globalUser = useSelector((state) => state.user.user);

  const [isEditable, setIsEditable] = useState(false);
  const [user, setUser] = useState(globalUser);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: [e.target.value],
    });
  };
  const onSubmit = () => {
    if (!isEditable) {
      setIsEditable(!isEditable);
    } else {
      //TODO update user data here
    }
  };
  if (user === null && globalUser !== null) {
    setUser(globalUser);
  }
  return (
    user !== null && (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 border border-primary">user preference</div>
          <div className="col-md-3 border border-primary">
            <div className="row-cols-md-3 text-center">
              <img
                src={profileImage}
                alt="Profile image"
                style={{ width: "60%", height: "70%" }}
                className="border rounded-circle"
              />

              <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="userName"
                    value={user.name}
                    onChange={onChange}
                    disabled={!isEditable ? "disabled" : ""}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">
                    User Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    disabled={!isEditable ? "disabled" : ""}
                    id="userEmail"
                    value={user.email}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userPhone" className="form-label">
                    User Phone Number
                  </label>
                  <input
                    type="text"
                    disabled={!isEditable ? "disabled" : ""}
                    name="phoneno"
                    id="userPhone"
                    value={user.phoneno}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <button type="submit">{isEditable ? "Update" : "Edit"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default User;
