import HeroContent from "./HeroContent"
import HeroForm from "./HeroForm"

const Hero = () => {
    return (
        <div className="lg:h-[95vh] md:h-[200vh] lg:hero_background bg-cover grid grid-cols-5">
            <HeroContent />
            <HeroForm />
        </div>
    )
}

export default Hero
