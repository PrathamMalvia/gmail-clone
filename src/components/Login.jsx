import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button"
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/appSlice";

const Login = () => {
    const dispatch = useDispatch();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            dispatch(setUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                uid: result.user.uid, // Adding user ID
                phoneNumber: result.user.phoneNumber, // Adding phone number
                providerId: result.user.providerId, // Adding provider ID
                creationTime: result.user.metadata.creationTime, // Adding account creation time
                lastSignInTime: result.user.metadata.lastSignInTime // Adding last sign-in time
            }))

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
            <div className="p-8 bg-white flex flex-col  rounded-md">
                <h1 className="text-center text-xl font-medium mb-3">Sign in</h1>
                <p className="text-center text-sm font-normal mb-2">to continue to Gmail</p>
                <GoogleButton onClick={signInWithGoogle} />
            </div>
        </div>
    )
}

export default Login