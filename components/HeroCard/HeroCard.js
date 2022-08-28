import Card from "./Card"

const HeroCard = () => {
    return (
        <div className="flex justify-evenly h-[30rem]">
            <Card title="Map Direction" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." background="mapDirection" index="1" />
            <Card title="Accomodation Services" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." background="accomodation" index="2" />
            <Card title="Great Experience" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." background="experience" index="3" />
        </div>
    )
}

export default HeroCard
