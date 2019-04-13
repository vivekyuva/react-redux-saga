const initialState = {
    tasks: [
      {id: 1, title: "This is first task"},
      {id: 2, title: "This is second task"},
      {id: 3,  title: "This is third task"},
    ]
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SHOW_TASK_ASYNC': 
          return {...state};
          break;
    }
    
};

export default reducer;