import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';

const ContactHeader = () => {
    return (
        <div className="lg:h-7 h-10 bg-color-primary-dark flex items-center justify-between px-8">
            <p className="text-xs text-[#fff]/70 font-medium">Phone no: <span className="text-[#fff] cursor-pointer">+00 1234 567</span> or email us: <span className="text-[#fff] cursor-pointer">emailsample@email.com</span></p>
            <div className="text-sm text-[#fff] flex space-x-6">
                <FaFacebookF className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaDribbble className="cursor-pointer" />
            </div>
        </div>
    )
}

export default ContactHeader
