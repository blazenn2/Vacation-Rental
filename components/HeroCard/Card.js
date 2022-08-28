import PrimaryBtn from '../Utilities/PrimaryBtn'

const Card = (props) => {
    return (
        <div className="bg-white flex flex-col items-center justify-between w-[30%] rounded-md p-4 pb-12 text-center drop-shadow-2xl lg:-translate-y-20">
            <div className={`${props.index === "1" ? "bg-mapDirection" : props.index === "2" ? "bg-accomodation" : "bg-experience"} h-1/2 w-full bg-cover`}></div>
            <div className="font-playFair text-3xl text-[#000]/90 font-thin">{props.title}</div>
            <div className="font-poppins text-[#000]/30 font-semibold">{props.text}</div>
            <div>
                <PrimaryBtn text={"READ MORE"} />
            </div>
        </div>
    )
}

export default Card
