import { FC, ReactNode } from "react";

interface ISectionProps{
    title: string;
    children: ReactNode;
}

export const Section: FC<ISectionProps> =({title, children})=>{
return(
    <section className="section">
        <h2 className="section__title">{title}</h2>
        {children}
    </section>
)
}