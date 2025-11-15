import { FC } from "react";
import { FeedbackType } from "../Feedback";
import s from "../feedBack.module.css";

interface IfeedBackProps {
    options: FeedbackType[];
    onLeaveFeedback: (option: FeedbackType) => void;
}

const FeedbackOptions: FC<IfeedBackProps> = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.feedBack__button_container}>
            {options.map((item) => (
                <button
                    onClick={() => onLeaveFeedback(item)}
                    className={`${s.button} ${s.feedbackButton}`}
                    key={item}
                    type="button"
                >
                    {item}
                </button>
            ))}
        </div>
    );
};
export default FeedbackOptions;
