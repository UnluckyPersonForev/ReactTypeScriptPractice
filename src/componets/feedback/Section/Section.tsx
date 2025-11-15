import { FC, ReactNode } from "react";
import s from "../feedBack.module.css";
interface ISectionProps {
    title: string;
    children: ReactNode;
}

export const Section: FC<ISectionProps> = ({ title, children }) => {
    return (
        <section className={s.section}>
            <h2 className={s.section__title}>{title}</h2>
            {children}
        </section>
    );
};
