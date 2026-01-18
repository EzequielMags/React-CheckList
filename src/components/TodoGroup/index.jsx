import { SubHeading } from "../SubHeading";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";

export default function TodoGroup({ items, heading}) {
    return (
        <>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {items.map((t) => {
                    return <ToDoItem key={t.id} item={t} />
                })}
            </ToDoList>
        </>
    )
}