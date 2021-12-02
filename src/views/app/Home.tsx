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

    const products = [{
        id: "13",
        name: "Acer Laptop",
        seller: "PC Gears",
        stock: 152,
        price: 799,
        image: `https://static.acer.com/up/Resource/Acer/Laptops/Swift_1/Image/20200707/Acer-Swift-1_SF114-33_Gold_modelmain.png`
    }];

    return (
        <div className="home">
            <div className="home__head">
                <h2 className="title">Explore all products</h2>
                <Select options={categories} selectedValue={categories[0].value} />
            </div>
            <div className="home__body">
                {products.map(el => <ProductCard product={el}/>)}
            </div>
        </div>
    )
}