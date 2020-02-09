export default (state = {completed_jobs: []}, action)=>{
  switch(action.type) {
    case 'LOAD_COMPLETED_JOBS':
      return{
        ...state,
        completed_jobs: action.jobs
      }
    default:
      return state
  }
}
