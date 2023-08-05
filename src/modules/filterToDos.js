import { isPast, isToday, isTomorrow, parseISO } from 'date-fns';

export default function filterTodo(filterThis, data) {
    const filteredData = {};
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const toDo = data[key];
            const dueDate = parseISO(toDo.dueDate);
            
            if (
                (filterThis === 'today' && isToday(dueDate)) ||
                (filterThis === 'tomorrow' && isTomorrow(dueDate)) ||
                (filterThis !== 'today' && 
                filterThis !== 'tomorrow')
            
            ) {
                filteredData[key] = toDo;
            }
        }
    }

    console.log(filterThis, data, filteredData);
}