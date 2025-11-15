import { FC } from "react";
import s from "./phoneBook.module.css";
interface IContactForm {
    name: string;
    phoneNumber: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ContactForm: FC<IContactForm> = ({
    name,
    phoneNumber,
    onChange,
    onSubmit,
}) => {
    return (
        <>
            <form onSubmit={onSubmit} className={s.contact__form}>
                <div className={s.contact__input_box}>
                    <label htmlFor="" className={s.form__name}>
                        Name:
                    </label>
                    <input
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={name}
                        className={s.form__input}
                    />
                </div>
                <div className={s.contact__input_box}>
                    <label htmlFor="" className={s.form__number}>
                        Phone Number:
                    </label>
                    <input
                        name="phoneNumber"
                        type="text"
                        onChange={onChange}
                        value={phoneNumber}
                        className={s.form__input}
                    />
                </div>
                <button className={s.form__button} type="submit">
                    submit
                </button>
            </form>
        </>
    );
};
