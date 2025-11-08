import exp from "constants";
import { FC } from "react";
import { IContact } from "./Types/Types";
interface IContactList {
    contacts: IContact[];
    deleteContacts: (id: string) => void
}
export const ContactList: FC<IContactList> = ({contacts, deleteContacts}) =>{
    return(
        <>
        {(contacts.map(item  => <li key={item.id}><p className="list__text">Name: {item.name} Phone Number: {item.phoneNumber}</p>
        <button className="del__button" onClick={()=>deleteContacts(item.id)}>delete</button></li>))}
        </>
    )
}