import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between mx-3 h-16 border border-black">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdMenu size={"24px"} />
                    </div>
                    <img className="w-8" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-logo" />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>
            <div className="md:block hidden w-[50%] mr-60">
                <div className="flex items-center bg-[#EAF1FB] px-3 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className="text-gray-700" />
                    <input
                        type="text"
                        className="rounded-full w-full bg-transparent outline-none px-1"
                        placeholder="Search mail"
                    />
                </div>
            </div>
            <div className="md:block hidden">
                <div className="flex items-center gap-1">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <AiOutlineQuestionCircle size={"26px"} />
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoSettingsOutline size={"24px"} />
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <PiDotsNineBold size={"24px"} />
                    </div>
                    <div className="cursor-pointer">
                        <Avatar
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            size="40"
                            round={true}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar