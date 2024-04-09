import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({message}) {
    const showMessage = () => {
        toast.success("Please Log in before checking out", {
            position:toast.TOP_CENTER,
        })
    }

    return (
        <>
        <button onClick={showMessage}>{message}</button>
        <ToastContainer />
        </>
    )
}

