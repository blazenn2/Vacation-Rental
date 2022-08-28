import ApartmentCard from "./ApartmentCard"

const ApartmentRoom = () => {
    const room = [{ name: 'Suite Room' }, { name: 'Standard Room' }, { name: 'Family Room' }, { name: 'Delux Room' }];
    return (
        <div className="h-[150vh] bg-slate-100 flex justify-center flex-col items-center">
            <h2 className="font-playFair text-black/70 text-6xl">Apartment Room</h2>
            <div className="grid grid-cols-4">
                {room.forEach((val, i) => <ApartmentCard title={val} key={i} />)}
            </div>
        </div>
    )
}

export default ApartmentRoom
