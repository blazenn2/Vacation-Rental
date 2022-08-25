import PrimaryBtn from "../Utilities/PrimaryBtn"

const HeroForm = () => {
    return (
        <div className="lg:col-start-4 lg:col-end-6 md:col-start-1 md:col-end-6 lg:h-3/4 md:h-[95vh] w-3/4 bg-white m-3 rounded-lg justify-self-center px-8 py-12 drop-shadow-2xl">
            <form className="grid grid-cols-2 gap-x-6 gap-y-5">
                <h2 className="font-playFair text-4xl col-start-1 col-end-3 text-black/80 text-Poppins">Book your apartment</h2>
                <input type="text" placeholder="Full Name" className="col-start-1 col-end-3 bg-gray-500/10 p-3 border-0 text-Poppins focus:outline-none" />
                <input type="date" placeholder="Check-In" className="bg-gray-500/10 p-3 border-0 text-Poppins focus:outline-none" />
                <input type="date" placeholder="Check-Out" className="bg-gray-500/10 p-3 border-0 text-Poppins focus:outline-none" />
                <select className="bg-gray-500/10 p-3 border-0 text-Poppins focus:outline-none">
                    <option>Adults</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <select className="bg-gray-500/10 p-3 border-0 text-Poppins focus:outline-none">
                    <option>Children</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input type="phone" placeholder="Phone number" className="bg-gray-500/10 p-3 border-0 text-Poppins focus:outline-none" />
                <input type="time" placeholder="Time" className="bg-gray-500/10 p-3 focus:border-0 text-Poppins focus:outline-none" />
                <PrimaryBtn text={"BOOK APPARTMENT NOW"} css={"col-start-1 col-end-3 py-4"} />
            </form>
        </div>
    )
}

export default HeroForm
