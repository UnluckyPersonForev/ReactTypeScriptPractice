import { FC } from "react"
import { FeedbackType } from "../Feedback";


interface IfeedBackProps{
    options: FeedbackType[];
    onLeaveFeedback: (option: FeedbackType) => void
}

const FeedbackOptions:FC<IfeedBackProps> = ({options, onLeaveFeedback}) =>{
    return (
        <div>
            {options.map(item => (
                <button onClick={() => onLeaveFeedback(item)}  key={item} type="button">{item}</button>
            ))
               
            }
        </div>
    )
}
export default FeedbackOptions