import { toast } from 'react-toastify';


export const notifyWithAuth = (type) => {
    const toastObject = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    if (type === 'usedEmail') {
        toast.error('Email is used', {
            toastObject,
        });
    }
}