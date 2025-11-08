import React, { FC, useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import { Statisctics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notifi } from "./Notifi/Notifi";

interface IFeedBackState{
    good: number;
    neutral: number;
    bad: number
}

export type FeedbackType = keyof IFeedBackState

export const Feedback: FC = () => {
    const [feedback,setFeedback] = useState<IFeedBackState>({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const handleLeaveFeedback= (type: keyof IFeedBackState) => {
        setFeedback((prev) => ({...prev, [type]: prev[type] + 1}))
    }
   const totalFeedBackCounter = (): number=>{
    return feedback.good + feedback.neutral + feedback.bad
   }
   const percentPositiveFeedback  = (): number =>{
   if(feedback.good ===0){
    return 0
   }else{
     return Math.ceil((totalFeedBackCounter() / feedback.good)*100)  
   }
   }
   const total = totalFeedBackCounter();
   const positive = percentPositiveFeedback();

return(
    
<>
<Section title="please leave feedback">
     <FeedbackOptions options={Object.keys(feedback) as FeedbackType[]} onLeaveFeedback={handleLeaveFeedback}/>
</Section>
<Section title="statistics" >
    {total === 0?(<Notifi message="no feedback given"/>):(<Statisctics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={total} positivePercentage={positive}/>)}
</Section>
</>
)
}
export default Feedback
