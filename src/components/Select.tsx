interface Props {
    options: {
        text: string;
        value: string;
    }[];
    selectedValue: string;
}

export default (props: Props) => {

    return (
        <select className="select">
            {props.options.map((el => <option value={el.value} >{el.text}</option>))}
        </select>
    )
}