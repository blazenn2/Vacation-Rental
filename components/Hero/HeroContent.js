import PrimaryBtn from "../Utilities/PrimaryBtn"
import SecondaryBtn from "../Utilities/SecondaryBtn"

const HeroContent = () => {
    return (
        <div className="col-start-1 lg:col-end-4 md:col-end-6 pl-10 self-center space-y-5 md:h-[95vh] lg:h-min lg:block flex flex-col justify-center md:hero_background md:bg-contain lg:bg-none">
            <h4 className="text-xl text-white">Welcome to Vacation Rental</h4>
            <h1 className="text-[5rem] font-playFair font-bold text-white leading-tight">Rent an appartment for your vacation</h1>
            <div>
                <PrimaryBtn text={"LEARN MORE"} />
                <SecondaryBtn text={"CONTACT US"} />
            </div>
        </div>
    )
}

export default HeroContent
