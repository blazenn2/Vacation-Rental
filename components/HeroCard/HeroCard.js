import Card from "./Card"

const HeroCard = () => {
    return (
        <div className="flex justify-evenly h-[30rem]">
            <Card title="Map Direction" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." background="mapDirection" />
            <Card title="Accomodation Services" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." background="accomodation" />
            <Card title="Great Experience" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." background="experience" />
        </div>
    )
}

export default HeroCard
