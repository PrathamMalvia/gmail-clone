import { MdOutlineCropSquare } from "react-icons/md"
import { RiStarSLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const Message = () => {
    const navigate = useNavigate();

    const openMail = () => {
        navigate("/mail/1234");
    }

    return (
        <div
            onClick={openMail}
            className="flex items-center justify-between border-b border-gray-200 px-4 py-2 text-sm hover:cursor-pointer hover:shadow-md">
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-300">
                    <MdOutlineCropSquare className="w-6 h-6" />
                </div>
                <div className="flex-none text-gray-300">
                    <RiStarSLine className="w-6 h-6" />
                </div>
            </div>

            <div className="flex-1 ml-4">
                <p className="text-gray-600 truncate inline-block max-w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto recusandae ad accusamus, nulla harum!</p>
            </div>

            <div className="flex-none text-gray-400 text-sm">
                Time renders here
            </div>
        </div>
    )
}

export default Message