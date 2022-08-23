const Navigation = () => {
    return (
        <div className="flex items-center justify-between h-24 px-10">
            <div>
                <a href="#"><h1 className="text-2xl font-extrabold">Vacation<span className="text-color-primary">Rental</span></h1></a>
            </div>
            <nav className="lg:h-full cursor-pointer">
                <div className="lg:hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="w-6 h-6 lg:hidden text-[#000]/20" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <h2 className="text-[#000]/20 text-lg lg:hidden block">MENU</h2>
                </div>
                <ul className="lg:flex text-[#000]/70 h-full items-center hidden">
                    <div className="lg:h-full lg:flex items-center lg:justify-center cursor-pointer lg:w-24 hover:text-color-primary transition-all ease-out duration-500 lg:nav_item">
                        <li>Home</li>
                    </div>
                    <div className="lg:h-full lg:flex items-center lg:justify-center cursor-pointer lg:w-24 hover:text-color-primary transition-all ease-out duration-500 lg:nav_item">
                        <li>About</li>
                    </div>
                    <div className="lg:h-full lg:flex items-center lg:justify-center cursor-pointer lg:w-24 hover:text-color-primary transition-all ease-out duration-500 lg:nav_item">
                        <li>Services</li>
                    </div>
                    <div className="lg:h-full lg:flex items-center lg:justify-center cursor-pointer lg:w-40 hover:text-color-primary transition-all ease-out duration-500 lg:nav_item">
                        <li>Apartment Room</li>
                    </div>
                    <div className="lg:h-full lg:flex items-center lg:justify-center cursor-pointer lg:w-24 hover:text-color-primary transition-all ease-out duration-500 lg:nav_item">
                        <li>Blog</li>
                    </div>
                    <div className="lg:h-full lg:flex items-center lg:justify-center cursor-pointer lg:w-24 hover:text-color-primary transition-all ease-out duration-500 lg:nav_item">
                        <li>Contact</li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
