import { FC } from "react"

interface IStatisticsProps{
    good: number
    neutral: number
    bad: number
    total: number
    positivePercentage:number
}
export const Statisctics:FC<IStatisticsProps> = ({good, neutral, bad, total, positivePercentage})=>{
    
    return(<>
    <ul className="statistics__list">
        <li className="statistics__list-item">Good: {good}</li>
        <li className="statistics__list-item">Neutral: {neutral}</li>
        <li className="statistics__list-item">Bad: {bad}</li>
        <li className="statistics__list-item">Total: {total}</li>
        <li className="statistics__list-item">Positive Percentage: {positivePercentage}%</li>
    </ul>
    </>)
}
