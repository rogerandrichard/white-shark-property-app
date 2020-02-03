import axios from 'axios';

export const fetchCompletedJobs = (jobs = [])=>({
  type: 'LOAD_COMPLETED_JOBS',
  jobs
})

export const startFetchCompletedJobs = ()=>{
  return (dispatch, getState)=> {
    const request = axios.get("http://localhost:3000/api/jobs/completed.json");

    return request
    .then((request)=>{
      console.log('JJJJ', request.statusText)
      const jobs = []
      // request.data.forEach((job)=>{
      //   jobs.push(job)
      // })
      dispatch(fetchCompletedJobs(request.data))
    })
  }
}
