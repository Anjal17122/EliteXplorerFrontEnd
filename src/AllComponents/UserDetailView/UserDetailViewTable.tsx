import { Descriptions } from "antd";
import { UserType } from "../../Service/RegisterManager/RegisterBody";
import { getImageUrl } from "../../Utils/Request/Constants";

type UserDetail = { user: UserType };
const UserDetailViewTable = ({ user }: UserDetail) => (
  <>
    <Descriptions title="User Info" bordered layout="vertical">
      <Descriptions.Item label="" span={3}>
        {" "}
        <img
          src={getImageUrl + user.filename}
          alt="avatar"
          style={{ width: "86px", height: "86px", borderRadius: "100%" }}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
      <Descriptions.Item label="Full Name">{user.fullName}</Descriptions.Item>
      <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
      <Descriptions.Item label="Role">{user.personRole}</Descriptions.Item>
      <Descriptions.Item label="Phone No">{user.phoneNo}</Descriptions.Item>
      <Descriptions.Item label="Register Date">
        {user.registerDate}
      </Descriptions.Item>
      <Descriptions.Item label="Specialization">
        {user.specialization}
      </Descriptions.Item>
      <Descriptions.Item label="User Status">
        {user.userStatus}
      </Descriptions.Item>
    </Descriptions>
  </>
);

export default UserDetailViewTable;
