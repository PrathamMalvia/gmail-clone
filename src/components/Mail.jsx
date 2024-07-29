import { deleteDoc, doc } from "firebase/firestore"
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
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../firebase"


const Mail = () => {
    const navigate = useNavigate();
    const { selectedEmail } = useSelector(store => store.appSlice)
    const params = useParams();

    const deleteMailById = async (id) => {
        try {
            await deleteDoc(doc(db, "emails", id))
            navigate("/");
        } catch (error) {
            console.log(error);
        }
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
                    <div onClick={() => deleteMailById(params.id)} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
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
                        <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
                        <div className="flex items-center gap-1 text-sm bg-gray-200 rounded-md px-2">
                            Inbox
                            <span className="hover:bg-gray-400">
                                <IoIosClose size={"15px"} />
                            </span>
                        </div>
                    </div>
                    <div className="flex-none text-gray-400 my-5 text-sm">
                        <p>{selectedEmail?.createdAt ? formatToIST(selectedEmail.createdAt.toDate()) : ''}</p>
                    </div>
                </div>

                <div className="text-gray-500 text-sm ">
                    <h1>You</h1>
                    <span>to {selectedEmail?.to}</span>
                </div>

                <div className="my-10 ">
                    <p>{selectedEmail?.message}</p>
                </div>
            </div>

        </div>
    )
}

export default Mail