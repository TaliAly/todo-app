import userImg from "/img/user.jpg";
import "./User.style.scss"

function User(){
    return (
        <div className="user">
            <img src={userImg} alt="user img" />
        </div>
    )
};

export default User