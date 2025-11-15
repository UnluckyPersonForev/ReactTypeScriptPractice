import { FC } from "react";
import s from "../feedBack.module.css";
interface INotification {
    message: string;
}
export const Notifi: FC<INotification> = ({ message }) => {
    return (
        <>
            <p className={s.notification__text}>{message}</p>
        </>
    );
};
