import { startOfMonth, endOfMonth, differenceInDays, format } from 'date-fns';
import Cell from "./Cell";

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Calendar = ({ date = '' }) => {
    const convertedDate = date.split("/").reverse().join("-");
    const finalizedDate = new Date(convertedDate)
    const startDate = startOfMonth(finalizedDate)
    const endDate = endOfMonth(finalizedDate)
    const numDays = differenceInDays(endDate, startDate) + 1;
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();
    return (
        <div className="w-[400px] bg-teal-800">
            <div className="grid grid-cols-7 items-center justify-center text-center text-teal-50">
                <Cell className="col-span-7 text-3xl"> {format(finalizedDate, 'MMMM yyyy')} </Cell>
                {daysOfWeek.map((days) => <Cell>{days}</Cell>)}
                {Array.from({ length: prefixDays }).map((_, index) => {
                    return <Cell key={index}>  </Cell>
                })}
                {Array.from({ length: numDays }).map((_, index) => {
                    const dates = index + 1;
                    const activeDate = format(finalizedDate, "d");
                    const isCurrentDate = dates.toString() === activeDate;
                    return <Cell key={dates} isActive={isCurrentDate}  > {dates} </Cell>
                })}
                {Array.from({ length: suffixDays }).map((_, index) => {
                    return <Cell key={index}>  </Cell>
                })}
            </div>
        </div>
    )
}

export default Calendar;