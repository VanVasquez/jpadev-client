import { useParams } from "react-router-dom"

const Profile = () => {
  const {user_id} = useParams();
  return (
    <div>Profile {user_id}</div>
  )
}

export default Profile  