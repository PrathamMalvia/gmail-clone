// import { useState } from "react"
import { LuPencil } from "react-icons/lu"
import {  MdOutlineInbox, MdOutlineKeyboardArrowDown, MdOutlineStarOutline, MdOutlineWatchLater } from "react-icons/md"
import { TbSend2 } from "react-icons/tb"
import { useDispatch } from "react-redux"
import { setOpen } from "../redux/appSlice"
import { IoDocumentOutline } from "react-icons/io5"

const sidebarItems = [
    {
        icon: <MdOutlineInbox size={"20px"} />,
        text: "Inbox"
    },
    {
        icon: <MdOutlineStarOutline size={"20px"} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={"20px"} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={"20px"} />,
        text: "Sent"
    },
    {
        icon: <IoDocumentOutline size={"20px"} />,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
        text: "More"
    },
]

const Sidebar = () => {
    // const [open, setOpen] = useState(false); // this is local state variable
    const dispatch = useDispatch();

    return (
        <div className="w-[15%]">
            <div className="p-3">
                <button onClick={() => dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
                    <LuPencil size={"24px"} />
                    Compose
                </button>

            </div>
            <div className="text-gray-700">
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200">
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default Sidebar