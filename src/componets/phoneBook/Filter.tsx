import React, { FC } from "react";
import s from "./phoneBook.module.css";
interface IFilterProps {
    filterProp: string;
    filterHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Filter: FC<IFilterProps> = ({ filterProp, filterHandler }) => {
    return (
        <>
            <div className={s.filter__name}>
                <label htmlFor="" className={s.filter__label}>
                    <input
                        type="text"
                        value={filterProp}
                        onChange={filterHandler}
                        className={s.filter__input}
                        placeholder="search by name"
                    />
                </label>
            </div>
        </>
    );
};
