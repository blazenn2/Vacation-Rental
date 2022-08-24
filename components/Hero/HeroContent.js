import PrimaryBtn from "../Utilities/PrimaryBtn"
import SecondaryBtn from "../Utilities/SecondaryBtn"

const HeroContent = () => {
    return (
        <div className="col-start-1 col-end-4 pl-10 self-center space-y-5">
            <h4 className="text-xl text-white">Welcome to Vacation Rental</h4>
            <h1 className="text-[5rem] font-playFair font-bold text-white leading-tight">Rent an appartment for your vacation</h1>
            <PrimaryBtn text={"LEARN MORE"} />
            <SecondaryBtn text={"CONTACT US"} />
        </div>
    )
}

export default HeroContent
