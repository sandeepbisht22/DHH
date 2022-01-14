import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileImage from "../../../resources/images/defaultProfile.png";
import { userActions } from "../../../state/actions";

const UserDetails = () => {
  const globalUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: globalUser.name,
    email: globalUser.email,
    phoneno: globalUser.phoneno,
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: [e.target.value],
    });
  };
  const onSubmit = () => {
    dispatch(userActions.updateUserInfo(user));
    navigate("/user");
  };
  return (
    <div className="container d-flex justify-content-evenly align-items-center">
      <div className="col-md-3">
        <div className="row-cols-md-3 text-center">
          <img
            src={profileImage}
            alt="Profile image"
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
                name="phoneno"
                id="userPhone"
                value={user.phoneno}
                onChange={onChange}
                className="form-control"
              />
            </div>

            {/* <button type="submit">{isEditable ? "Update" : "Edit"}</button> */}
          </form>
          <button onClick={onSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
