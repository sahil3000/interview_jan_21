import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getTodo } from "./getTodo";
import NewTodo from "./NewTodo";
import PaginationComponent from "./Pagination";
import SearchAndSort from "./SearchAndSort";
import TodoDetail from "./todoDetail";
import './Todo.css';

const ToDos = ()=>{
    const [todos,setTodos]=useState(getTodo());
    const [searchFlag,setSearchFlag]=useState(false);
    const [searchTodos,setSearchTodos]=useState([]);
    const [filterRows,setFilterRows]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [recordPerPage,setRecordPerPage]=useState(3); 
    let intitalFlag=true;
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(todos));
        console.log('vfbg')
        
    },[todos]);

    useEffect(()=>{
        let start=0;
        if(currentPage!==1){
            start = (currentPage * recordPerPage) - recordPerPage;
        }
        console.log(start,start+recordPerPage);
        if(!searchFlag){
            console.log('non search');
            setFilterRows([...todos.slice(start,start+recordPerPage)]);
        }else{
            console.log('search');
            setFilterRows([...searchTodos.slice(start,start+recordPerPage)]);
        }
        if(currentPage>Math.ceil(todos.length/recordPerPage) && currentPage!==1){
            setCurrentPage(currentPage-1);
        }
        console.log(filterRows);
    },[currentPage,todos,recordPerPage,searchFlag,searchTodos]);

    

    const addNewHandler=(todo)=>{
        let id=Date.now();        ;
        console.log(id,todo);
        setTodos([{id,edit:false,...todo},...todos]);
        console.log(todos);
        setSearchFlag(false);
    }
    const deleteEvent=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
        setSearchFlag(false);
    }
    const updateHandler=(id,data)=>{
        if(data.trim()===''){
            deleteEvent(id)
        }else{
            const updateObj=todos.find(todo=>todo.id===id)
            console.log(updateObj)
            updateObj.title=data;
            updateObj.edit=false;
            console.log(todos);
            setTodos([...todos]);
        }
        setSearchFlag(false);
        
    }

    const editHandler=(id,cancelFlag=false)=>{
        const newTodos=todos.map(todo=>{
            todo.edit=false;
            if(todo.id===id && !cancelFlag){
                todo.edit=true;
            }
            return todo;
        });
        setTodos(newTodos);
        setSearchFlag(false);
    }

    
    const changePage=(page)=>{
        setCurrentPage(page);
    }
    const changeSearchTodosEvent=(data)=>{
        console.log(data);
        setSearchTodos([...data]);
        setSearchFlag(true);
    }
    
    const sorting=(data)=>{
        setSearchFlag(false);
        setTodos([...data]);
    }
    const paginationObj={
        totalPages:!searchFlag?Math.ceil(todos.length/recordPerPage):Math.ceil(searchTodos.length/recordPerPage),
        currentPage,
        changePage:changePage
    }

    return (<Row>
        <Col>
        <h3 className="text-center text-dark">To DO App with search and pagination</h3>
           
            <hr />
            <NewTodo addEvent={addNewHandler} />
            <hr />
            {todos.length?
            <div className='task-list'>
                <h5 className="text-center">Task List</h5>
                <SearchAndSort changePage={changePage} sorting={sorting} setSearchFlag={setSearchFlag} setRecordPerPage={setRecordPerPage} changeSearchTodosEvent={changeSearchTodosEvent} todos={todos} />
                <ul>
                    {filterRows.map((todo)=>{
                        return <TodoDetail  todo={todo} key={todo.id} editHandler={editHandler} updateHandler={updateHandler} deleteEvent={deleteEvent} />
                    })}
                </ul>
            </div>
            :
            <div className='empty text-center'>No Task.</div>}
            <PaginationComponent {...paginationObj} />
        </Col>
    </Row>);
}
export default ToDos