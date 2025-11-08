import { FC } from "react"

interface IContactForm{
    name: string,
    phoneNumber: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void,
    onSubmit: (event: React.FormEvent<HTMLFormElement>)=> void
}

export const ContactForm: FC<IContactForm> = ({name, phoneNumber, onChange, onSubmit})=>{
    
    return(
        <>
        <form onSubmit={onSubmit} className="contact__form">
            <label htmlFor="" className="form__name">Name</label>
            <input name="name" type="text" onChange={onChange} value={name} className="form__input"/>
            <label htmlFor="" className="form__number">Phone Number</label>
            <input name="phoneNumber" type="text" onChange={onChange} value={phoneNumber} className="form__input"/>
            <button className="form__button" type="submit">submit</button>
        </form>
        </>
    )
}