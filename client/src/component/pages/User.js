import React from "react";
import profileImage from "../../resources/images/defaultProfile.png";
const User = () => {
  return (
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
            <div className="p-2">Flex item 2</div>
            <div className="p-2">Flex item 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
