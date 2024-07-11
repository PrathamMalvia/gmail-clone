import { BiArchiveIn } from "react-icons/bi"
import { IoIosClose, IoMdArrowBack, IoMdMore } from "react-icons/io"
import {
    MdDeleteOutline,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdOutlineAddTask,
    MdOutlineDriveFileMove,
    MdOutlineMarkEmailRead,
    MdOutlineReport,
    MdOutlineWatchLater
} from "react-icons/md"
import { useNavigate } from "react-router-dom"


const Mail = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-1 bg-white rounded-xl mx-5 ">
            <div className="flex items-center justify-between px-4 ">
                <div className="flex items-center gap-2 text-gray-700 py-2">
                    <div onClick={() => { navigate("/") }} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdArrowBack size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <BiArchiveIn size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineReport size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdDeleteOutline size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineMarkEmailRead size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineWatchLater size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineAddTask size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <MdOutlineDriveFileMove size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdMore size={"20px"} />
                    </div>
                </div>

                <div className="flex items-center gap-2 ">
                    <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowLeft size={"20px"} /></button>
                    <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowRight size={"20px"} /></button>
                </div>

            </div>

            <div className="h-[90vh] overflow-y-auto p-4">
                <div className="flex items-center justify-between bg-white gap-1">
                    <div className="flex items-center gap-2">
                        <h1>Subject</h1>
                        <div className="flex items-center gap-1 text-sm bg-gray-200 rounded-md px-2">Inbox <IoIosClose /></div>
                    </div>
                    <div className="flex-none text-gray-400 my-5 text-sm">
                        <p>12-07-2024</p>
                    </div>
                </div>

                <div className="text-gray-500 text-sm ">
                    <h1>ishita@gmail.com</h1>
                    <span>to me</span>
                </div>

                <div className="my-10 ">
                    <p>Message</p>
                </div>
            </div>

        </div>
    )
}

export default Mail