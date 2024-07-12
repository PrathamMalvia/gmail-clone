import { MdOutlineCropSquare } from "react-icons/md"
import { RiStarSLine } from "react-icons/ri"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setSelectedEmail } from "../redux/appSlice";

const Message = ({ email }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigate(`/mail/${email.id}`);
    }

    const formatToIST = (date) => {
        const utcDate = date.getTime() + (date.getTimezoneOffset() * 60000);
        const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
        const istDate = new Date(utcDate + istOffset);
        return istDate.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour12: true,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

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
                <p className="text-gray-600 truncate inline-block max-w-full">
                    {email?.message}
                </p>
            </div>

            <div className="flex-none text-gray-400 text-sm">
                <p>{email?.createdAt ? formatToIST(email.createdAt.toDate()) : ''}</p>
            </div>
        </div>
    )
}

export default Message