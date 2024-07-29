import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { MdLogout } from "react-icons/md";
import gmail_logo from "../../assets/gmail_logo.webp";

const Navbar = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const { user } = useSelector(store => store.appSlice);

    const dispatch = useDispatch();

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        dispatch(setSearchText(input));
    }, [dispatch, input])

    return (
        <div className="flex items-center justify-between mx-2 mr-5 h-16">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdMenu size={"24px"} />
                    </div>
                    <img className="w-8" src={gmail_logo} alt="gmail-logo" />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>
            <div className="md:block hidden w-[50%] mr-60">
                <div className="flex items-center bg-[#EAF1FB] px-3 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className="text-gray-700" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
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
                    <div className="relative cursor-pointer">
                        <Avatar
                            src={user?.photoURL}
                            size="35"
                            round={true}
                            onClick={() => setToggle(prevToggle => !prevToggle)}
                        />
                        <AnimatePresence>
                            {toggle && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.1 }}
                                    className="absolute top-10 right-3 z-20 shadow-lg bg-white rounded-md"
                                >
                                    <div
                                        onClick={signOutHandler}
                                        className="flex items-center p-4 gap-2"
                                    >
                                        <MdLogout />
                                        <h1 className="text-md font-normal">Sign&nbsp;out</h1>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
