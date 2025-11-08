import React, { FC } from "react";
interface IFilterProps{
    filterProp: string,
    filterHandler: (event: React.ChangeEvent<HTMLInputElement>)=> void
}
export const Filter:FC<IFilterProps> = ({filterProp, filterHandler})  =>{

    
return(
    <>
    <div className="filter__name">
        <label htmlFor="" className="filter__label">
            <input type="text" value={filterProp} onChange={filterHandler} className="filter__input" />
        </label>
    </div>
    </>
)
}