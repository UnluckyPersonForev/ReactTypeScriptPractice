import exp from "constants";
import { FC } from "react";
import { IContact } from "./Types/Types";
import s from "./phoneBook.module.css";
interface IContactList {
    contacts: IContact[];
    deleteContacts: (id: string) => void;
}
export const ContactList: FC<IContactList> = ({ contacts, deleteContacts }) => {
    return (
        <ul className={s.contact__list}>
            {contacts.map((item) => (
                <li key={item.id} className={s.list__item}>
                    <div className={s.item__info}>
                        <p className={s.list__text}>Name: {item.name}</p>
                        <p className={s.list__text}>
                            Phone: {item.phoneNumber}
                        </p>
                    </div>
                    <button
                        className={`${s.button} ${s.del__button}`}
                        onClick={() => deleteContacts(item.id)}
                    >
                        delete
                    </button>
                </li>
            ))}
        </ul>
    );
};
