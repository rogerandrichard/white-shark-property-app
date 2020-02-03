export default (state = {completed_jobs: []}, action)=>{

  console.log('Action Sent To Reducer', action)

  switch(action.type) {
    case 'LOAD_COMPLETED_JOBS':
    console.log('REDUCER LOAD_COMPLETED_JOBS', action.jobs)
      return{
        ...state,
        completed_jobs: action.jobs
      }
    default:
      return state
  }
}
