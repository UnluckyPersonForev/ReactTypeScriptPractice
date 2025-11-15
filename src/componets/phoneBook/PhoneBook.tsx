import React, { useState } from "react";
import { FC } from "react";
import { IPhoneBookState } from "./Types/Types";
import { IContact } from "./Types/Types";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import s from "./phoneBook.module.css";
export const PhoneBook: FC = () => {
    const [State, setState] = useState<IPhoneBookState>({
        contacts: [],
        filter: "",
        name: "",
        phoneNumber: "",
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const newContact: IContact = {
            id: nanoid(),
            name: State.name.trim(),
            phoneNumber: Number(State.phoneNumber.trim()),
        };
        const duplicateCheck = State.contacts.some(
            (item) => item.name.toLowerCase() === State.name.toLowerCase()
        );
        if (duplicateCheck === true) {
            alert("can't have same name or phone number");
            return;
        }
        setState((prev) => ({
            ...prev,
            contacts: [...prev.contacts, newContact],
            name: "",
            phoneNumber: "",
        }));
    };
    const handleDeleteContact = (id: string): void => {
        setState((prev) => ({
            ...prev,
            contacts: prev.contacts.filter((item) => item.id !== id),
        }));
    };
    const filteredContacts = (): IContact[] => {
        return State.contacts.filter((item) =>
            item.name.toLowerCase().includes(State.filter.toLocaleLowerCase())
        );
    };
    const handleFilterChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { value } = event.target;
        setState((prev) => ({ ...prev, filter: value }));
    };
    return (
        <>
            <section className={s.phoneBook}>
                <ContactForm
                    name={State.name}
                    phoneNumber={State.phoneNumber}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
                <Filter
                    filterHandler={handleFilterChange}
                    filterProp={State.filter}
                />
                <ContactList
                    contacts={filteredContacts()}
                    deleteContacts={handleDeleteContact}
                />
            </section>
        </>
    );
};
