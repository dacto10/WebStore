import { useLocation, useNavigate } from "react-router-dom";

interface Props {
    options: {
        value: string;
    }[];
    selectedValue: string;
    selectCategory: (category: string) => void;
}

const Select: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentCategory = new URLSearchParams(location.search).get("c") ?? "all";

    const SelectHandler = (category: string) => {
        category !== 'all' ? navigate(`?c=${category}`) : navigate(`/`);
        props.selectCategory(category);
    }

    return (
        <select className="select" onChange={e => SelectHandler(e.target.value)} value={currentCategory}>
            {props.options.map((el => <option value={el.value} >{el.value}</option>))}
        </select>
    )
};

export default Select;