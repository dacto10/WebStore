import ProductCard from "../../components/ProductCard";
import Select from "../../components/Select";

export default () => {
    const categories = [
        {
            text: "All Categories",
            value: "all"
        },
        {
            text: "Electronics",
            value: "elec"
        },
        {
            text: "Clothing",
            value: "cloth"
        }
    ];

    return (
        <div className="home">
            <div className="home__head">
                <h2 className="title">Explore all products</h2>
                <Select options={categories} selectedValue={categories[0].value} />
            </div>
            <div className="home__body">
                <ProductCard />
            </div>
        </div>
    )
}