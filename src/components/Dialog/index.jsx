import { useEffect, useRef } from "react";
import "./dialog.style.css"
import { IconTrash } from "../icons";

export default function Dialog({isOpen, onClose, paragrafo}) {
    
    const dialogRef = useRef(null)    

    // "Show the dialog" button opens the dialog modally
    const openDialog = () => {
        dialogRef.current.showModal();
    };

    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
    }

    
    return (
        <>
            <dialog className="dialog" ref={dialogRef}>
                <div className="container-button-close">
                    <button className="button-close" autoFocus onClick={onClose}>
                        <i className="material-icons">&#xe5cd;</i>
                    </button>
                </div>
                <p>
                    {paragrafo}
                </p>
            </dialog>
           
        </>
    )
}