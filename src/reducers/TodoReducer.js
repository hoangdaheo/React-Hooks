import {
    ADD_TODO,
    DELETE_TODO,
    GET_TODOS,
    SAVE_TODOS,
} from './type';
export const todoReducer = (state, action) => {
    //? state chinh la cong viec o bat cu thoi diem nao
    //? action hanh dong cua nguoi dung
    const {type, payload} = action;
    switch (type) {
        case GET_TODOS:
            console.log("Getting todos...");
            const todos = localStorage.getItem('todos');
            console.log(todos);
            if(todos){
                state = JSON.parse(todos);
            }
            return state;
        case SAVE_TODOS:
            localStorage.setItem('todos',JSON.stringify(payload.todos));
            return state;
        case ADD_TODO:
            return [...state,payload.todo];
        case DELETE_TODO:
            return state.filter((todo)=> todo.id !== payload.id );
        
        default:
            return state;
            
    }
}