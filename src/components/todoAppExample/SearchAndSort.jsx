import { useState } from "react";
import { Form } from "react-bootstrap";

const SearchAndSort=({setRecordPerPage,todos,changeSearchTodosEvent ,changePage,setSearchFlag,sorting})=>{
    const [searchInput,setSearchInput]=useState('');
    const [activeSort,setActiveSort]=useState(0);
    const searchTodo=(e)=>{
        setSearchInput(e.target.value)
        setActiveSort(0)
        if(e.target.value.length===0){
            setSearchFlag(false);
        }
        const newTodos=todos.filter(todo=>{
            if(todo.title.toLowerCase().includes(e.target.value.toLowerCase())){
                return todo;
            }
        });
        changeSearchTodosEvent(newTodos);
        changePage(1);
    }

    const sortByEvent=(sortBy,pos='asc',activeSortData)=>{
        setActiveSort(activeSortData);
        if(pos==='asc') sorting([...todos.sort((a,b)=>a[sortBy]>b[sortBy]?1:-1)]);
        if(pos==='desc') sorting([...todos.sort((a,b)=>a[sortBy]<b[sortBy]?1:-1)]);
    }
    
    return (<div className='search_sort_section'>
        <Form.Control type="text" id="searchInput" value={searchInput} placeholder="Seach Task" onChange={searchTodo} autoComplete="off" />
            {searchInput.length===0 && (<>
            <button className={`btn btn-sm ${activeSort===2?'btn-success':'btn-dark'}`} onClick={()=>sortByEvent('title','asc',2)}>Task Asc</button>
            <button className={`btn btn-sm ${activeSort===1?'btn-success':'btn-dark'}`} onClick={()=>sortByEvent('title','desc',1)}>Task Desc</button>
            <button className={`btn btn-sm ${activeSort===4?'btn-success':'btn-dark'}`} onClick={()=>sortByEvent('date','asc',4)}>Date Asc</button></>)}
            <button className={`btn btn-sm ${activeSort===3?'btn-success':'btn-dark'}`} onClick={()=>sortByEvent('date','desc',3)}>Date Desc</button>
            
            
            <select type="text" id="searchInput" className="form-control" onChange={(e)=>setRecordPerPage(e.target.value)}  >
                <option key='1' value="3">Choose ItemPerPage (default 3)</option>   
                <option key='2' value="5">5</option>   
            </select>
    </div>);
}
export default SearchAndSort;