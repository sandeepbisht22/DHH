import React, { useState, useEffect } from "react";
import profileImage from "../../resources/images/defaultProfile.png";
import { useSelector, useDispatch } from "react-redux";
import Songs from "../common/Songs";

const User = () => {
  const globalUser = useSelector((state) => state.user.user);
  const favRapper = useSelector((state) => state.userChoice.favRapper);
  const favSong = useSelector((state) => state.userChoice.favSong);

  const favBeatProducer = useSelector(
    (state) => state.userChoice.favBeatProducer
  );

  const dispatch = useDispatch();

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

  return (
    user !== null && (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 border border-primary">
            <div>
              <div>
                <h3>Favourite Rapper</h3>
                <div className="scroll">
                  <div
                    className="row flex-row flex-nowrap col-md-6"
                    style={{ height: "25vh" }}
                  >
                    {favRapper !== null &&
                      favRapper.data.map((rapper) => {
                        return (
                          <div className="d-flex row">
                            <div
                              className="col-sm-6"
                              style={{ height: "100%" }}
                            >
                              <img
                                className="img-fluid"
                                style={{ height: "100%" }}
                                src={
                                  require(`../../resources/artist/images/profile/${rapper.profileImage}`)
                                    .default
                                }
                              />
                            </div>
                            <div className="col-sm-6">
                              <div>Name: {rapper.name}</div>
                              <div>Title: {rapper.title}</div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div>
                <h3>Favourite Beat Producer</h3>
                <div className="scroll">
                  <div
                    className="row flex-row flex-nowrap col-md-6"
                    style={{ height: "25vh" }}
                  >
                    {favBeatProducer !== null &&
                      favBeatProducer.data.map((beatProducer) => {
                        return (
                          <div className="d-flex row">
                            <div
                              className="col-sm-6"
                              style={{ height: "100%" }}
                            >
                              <img
                                className="img-fluid"
                                style={{ height: "100%" }}
                                src={
                                  require(`../../resources/artist/images/profile/${beatProducer.profileImage}`)
                                    .default
                                }
                              />
                            </div>
                            <div className="col-sm-6">
                              <div>Name: {beatProducer.name}</div>
                              <div>Title: {beatProducer.title}</div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div>
                <h3>Favourite Songs</h3>
                <div className="scroll">
                  <div
                    className="row flex-row flex-nowrap col-md-6"
                    style={{ height: "25vh" }}
                  >
                    <Songs songsList={favSong}></Songs>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

                {/* <button type="submit">{isEditable ? "Update" : "Edit"}</button> */}
              </form>
              <button onClick={onSubmit}>
                {isEditable ? "Update" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default User;
