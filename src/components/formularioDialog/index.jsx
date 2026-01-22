import "./formularioDialog.style.css"
import TextInput from "../TextInput";
import ButtonFormDialog from "../buttonFormDialog";

export default function FormularioDialog({onSubmit, defaultValue}) {
    return (

        <form className="formularioDialog" action={onSubmit}>
            <TextInput name="description" placeholder={"Digite o item que deseja adicionar"} defaultValue={defaultValue}/>
            <ButtonFormDialog />
        </form>
    )
}