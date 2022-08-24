import HeroContent from "./HeroContent"
import HeroForm from "./HeroForm"

const Hero = () => {
    return (
        <div className="h-[95vh] hero_background bg-cover grid grid-cols-5">
            <HeroContent />
            <HeroForm />
        </div>
    )
}

export default Hero
