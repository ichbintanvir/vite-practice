const btn = (status) => {
    if (status) {
        return <button>Login</button>
    }
    else {
        return <button>LogOut</button>
    }
}
const LoginStatus = () => {
    return (
        <>
            <h1>Login Status</h1>
            {btn(false)}
        </>
    );
}
export default LoginStatus;