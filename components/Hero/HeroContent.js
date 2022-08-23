import PrimaryBtn from "../Utilities/PrimaryBtn"
import SecondaryBtn from "../Utilities/SecondaryBtn"

const HeroContent = () => {
    return (
        <div className="col-start-1 col-end-2">
            <h4>Welcome to Vacation Rental</h4>
            <h1>Rent an appartment for your vacation</h1>
            <PrimaryBtn />
            <SecondaryBtn />
        </div>
    )
}

export default HeroContent
