import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMail = () => {
    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    })

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value]
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            createdAt: serverTimestamp(),
        })
        dispatch(setOpen(false));
        setFormData({
            to: "",
            subject: "",
            message: ""
        })
    }

    return (
        <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className="flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md">
                <h1>New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 />
                </div>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
                <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={changeHandler}
                    placeholder="To"
                    className="outline-none"
                />
                <hr />
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={changeHandler}
                    placeholder="Subject"
                    className="outline-none"
                />
                <hr />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={changeHandler}
                    placeholder="Message"
                    cols={"30"}
                    rows={"10"}
                    className="outline-none"
                >
                </textarea>
                <button
                    type="submit"
                    className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium">
                    Send
                </button>
            </form>

        </div>
    )
}

export default SendMail