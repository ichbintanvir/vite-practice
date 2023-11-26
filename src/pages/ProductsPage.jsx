import { useParams } from "react-router-dom";
import Menu from "./Menu";

const ProductsPage = () => {
    let { id, name } = useParams();
    return (
        <div>
            <Menu />
            <h1>This is products pages</h1>
            <h1>productId: {id}</h1>
            <h1>productName: {name}</h1>
        </div>
    );
}
export default ProductsPage;