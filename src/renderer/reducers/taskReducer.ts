import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface task{
    id:number,
    task:string,
    selected:boolean
}
export interface taskState {
  tasks: task[]
}

const initialState: taskState = {
    tasks:[]
}

export const taskListSlice:any = createSlice({
  name: 'taskListReducer',
  initialState,
  reducers: {
    addTask:(state,action: PayloadAction<string>)=>{
        state.tasks=[...state.tasks,{id: state.tasks.length,task:action.payload,selected:false}]
    },
    updateTask:(state,action: PayloadAction<{id:number,task:string}>)=>{
        var foundIndex = state.tasks.findIndex(x => x.id == action.payload.id);
        state.tasks[foundIndex].task= action.payload.task;
    },
    UpdateTaskSelection:(state,action: PayloadAction<{id:number,selected:boolean}>)=>{
        var foundIndex = state.tasks.findIndex(x => x.id == action.payload.id);
        state.tasks[foundIndex].selected= action.payload.selected;
    },
    clearTasks:(state)=>{
        state.tasks=[];
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addTask,updateTask,UpdateTaskSelection,clearTasks} = taskListSlice.actions

export default taskListSlice.reducer