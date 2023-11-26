const Header = () => {
    const arr = ['Dhaka', 'Cumilla', 'Bola'];
    return (
        <div>
            <h1>Header</h1>
            <h2 style={
                { color: 'red' }
            }>Inline CSS</h2>
            {
                <ol>
                    {
                        arr.map((ele) => {
                            return <li>{ele}</li>
                        })
                    }
                </ol>
            }
        </div>
    );
};
export default Header;