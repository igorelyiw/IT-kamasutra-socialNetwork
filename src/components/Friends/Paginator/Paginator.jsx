import React, { useState } from 'react';
import s from './Paginator.module.css';

const Paginator = (props ) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let { portionNumber, setPortionNumber } = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber>1 &&
        <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Prev</button>
        }
        { pages 
        .map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                onClick={() => { props.onPageChanged(p) }}    >{p} </span>
        })}
        
        {portionCount>portionNumber &&
        <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>
        }
        
        </div>



}
export default Paginator;