import { use, useEffect, useRef } from "react";
import "./dialog.style.css"
import { IconTrash } from "../icons";
import FormularioDialog from "../formularioDialog";
import TodoContext from "../TodoContext";

export default function Dialog({isOpen, onClose, addTodo}) {
    
    const dialogRef = useRef(null)  
    
    const {selectedTodo} = use(TodoContext)

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

    //  useEffect(() => {
    //      const dialog = dialogRef.current
    //      dialog?.addEventListener("close", onClose)
    //      return () => {
    //          dialog?.removeEventListener("close", onClose)
    //      }
    //  }, [onClose]) 
    

    
    return (
        <>
            <dialog className="dialog" ref={dialogRef}>
                <div className="container-button-close">
                    <button className="button-close" autoFocus onClick={onClose}>
                        <i className="material-icons">&#xe5cd;</i>
                    </button>
                </div>
                <FormularioDialog  onSubmit={addTodo} defaultValue={selectedTodo?.description}/>
            </dialog>
           
        </>
    )
}