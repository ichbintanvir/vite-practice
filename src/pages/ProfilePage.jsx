import { useParams } from "react-router-dom";
import Menu from "./Menu";

const ProfilePage = () => {
    let { userId } = useParams();
    return (
        <div>
            <Menu />
            <h1>This is profile page</h1>
            <h1>{userId}</h1>
        </div>
    );
}
export default ProfilePage;