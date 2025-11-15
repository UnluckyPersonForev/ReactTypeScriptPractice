import { FC } from "react";
import s from "../feedBack.module.css";
interface IStatisticsProps {
    good: number;
    neutral: number;
    bad: number;
    total: number;
    positivePercentage: number;
}
export const Statisctics: FC<IStatisticsProps> = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <>
            <ul className={s.statistics__list}>
                <li className={s.statistics__list_item}>Good: {good}</li>
                <li className={s.statistics__list_item}>Neutral: {neutral}</li>
                <li className={s.statistics__list_item}>Bad: {bad}</li>
                <li className={s.statistics__list_item}>Total: {total}</li>
                <li className={s.statistics__list_item}>
                    Positive Percentage: {positivePercentage}%
                </li>
            </ul>
        </>
    );
};
