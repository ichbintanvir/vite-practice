const Ternery = () => {
    const message = false;
    return (
        <>
            <h1>decision</h1>
            <div>
                {
                    message ?
                        <button>Happy Button</button>
                        :
                        <button>Sad Button</button>
                }
            </div>

        </>
    );
}
export default Ternery;