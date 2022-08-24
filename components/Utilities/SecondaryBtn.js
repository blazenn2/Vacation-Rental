const SecondaryBtn = (props) => {
    return (
        <button type="submit" className="p-3 m-1 tracking-widest transition-all bg-white text-xs font-semibold text-black/60 rounded border hover:border-white hover:bg-transparent hover:text-white">
            {props.text}
        </button>
    )
}

export default SecondaryBtn
