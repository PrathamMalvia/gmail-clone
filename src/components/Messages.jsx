import { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';

const Messages = () => {
    const { searchText, emails } = useSelector(store => store.appSlice);
    const [filterEmail, setFilterEmail] = useState(emails);
    const dispatch = useDispatch();

    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            dispatch(setEmails(allEmails));
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
    }, [dispatch]);

    useEffect(() => {
        const filteredEmail = emails?.filter((email) => {
            return email.to.toLowerCase().includes(searchText.toLowerCase()) || email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())
        });
        setFilterEmail(filteredEmail);
    }, [searchText, emails]);

    return (
        <div>
            {
                filterEmail && filterEmail?.map((email) => <Message key={email.id} email={email} />)
            }
        </div>
    )
}

export default Messages