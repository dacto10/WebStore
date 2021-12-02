import { useNavigate } from "react-router-dom";

interface Props {
    options: {
        text: string;
        value: string;
    }[];
    selectedValue: string;
}

const Select: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate();

    const SelectHandler = (category: string) => {
        category !== 'all' ? navigate(`?c=${category}`) : navigate(`/`);
    }

    return (
        <select className="select" onChange={e => SelectHandler(e.target.value)}>
            {props.options.map((el => <option value={el.value} >{el.text}</option>))}
        </select>
    )
};

export default Select;