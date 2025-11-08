import { FC } from "react";

interface INotification{
    message: string;
}
export const Notifi:FC<INotification>  =({message})=>{
return(<>
<p className="notification__text">{message}</p>
</>)
}