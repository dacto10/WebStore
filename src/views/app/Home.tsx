import ProductCard from "../../components/ProductCard";
import Select from "../../components/Select";

const Home: React.FC = () => {
    const categories = [
        {
            text: "All Categories",
            value: "all"
        },
        {
            text: "Electronics",
            value: "electronics"
        },
        {
            text: "Clothing",
            value: "clothing"
        }
    ];

    const products = [{
        id: "13",
        name: "Acer Laptop",
        category: "electronics",
        seller: "PC Gears",
        stock: 152,
        price: 799,
        image: `https://static.acer.com/up/Resource/Acer/Laptops/Swift_1/Image/20200707/Acer-Swift-1_SF114-33_Gold_modelmain.png`
    },
    {
        id: "14",
        name: "Camisa bien Gucci",
        category: "clothing",
        seller: "Gucci Gang",
        stock: 2,
        price: 1999,
        image: `https://static.wixstatic.com/media/e100fb_cc278b0d21ce46c1a0405c8d266f034b~mv2_d_1200_1500_s_2.jpg/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01/e100fb_cc278b0d21ce46c1a0405c8d266f034b~mv2_d_1200_1500_s_2.jpg`
    }];

    return (
        <div className="home">
            <div className="home__head">
                <h2 className="title">Explore all products</h2>
                <Select options={categories} selectedValue={categories[0].value}/>
            </div>
            <div className="home__body">
                {products.map(el => <ProductCard product={el}/>)}
            </div>
        </div>
    )
}

export default Home;