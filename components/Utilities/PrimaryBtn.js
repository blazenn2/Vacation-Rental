const PrimaryBtn = (props) => {
    return (
        <button type="submit" className={`p-3 m-1 tracking-widest transition-all bg-color-primary text-xs font-semibold text-white rounded border border-color-primary hover:bg-transparent hover:text-color-primary ${props.css}`}>
            {props.text}
        </button>
    )
}

export default PrimaryBtn
