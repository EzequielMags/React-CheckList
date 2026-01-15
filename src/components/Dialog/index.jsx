import { useEffect, useRef } from "react";
import "./dialog.style.css"
import { IconTrash } from "../icons";
import FormularioDialog from "../formularioDialog";

export default function Dialog({isOpen, onClose}) {
    
    const dialogRef = useRef(null)    

    // "Show the dialog" button opens the dialog modally
    const openDialog = () => {
        dialogRef.current.showModal();
    };
    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
    }

    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])


    const addTodo = () => {
        console.log("teste f")
        onClose()
    }

    
    return (
        <>
            <dialog className="dialog" ref={dialogRef}>
                <div className="container-button-close">
                    <button className="button-close" autoFocus onClick={onClose}>
                        <i className="material-icons">&#xe5cd;</i>
                    </button>
                </div>
                <FormularioDialog onSubmit={addTodo} />
            </dialog>
           
        </>
    )
}