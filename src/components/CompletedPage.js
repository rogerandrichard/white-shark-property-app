import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'


import { startFetchCompletedJobs } from '../actions/jobs.js'

class CompletedJobs extends React.Component{

  componentDidMount(){
       this.props.actions.startFetchCompletedJobs()
  }

  render(){
    if(this.props.jobs.length>0){
      console.log('JOBS...', this.props.jobs)
      return(
        <div>
              <table className='table table-striped'>
                <thead className='thead-inverse'>
                  <tr>
                    <th colSpan='5'>Completed Jobs</th>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Date Done</th>
                    <th>Crew Name</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.jobs.map(job => (
                      <tr key={job.id}>
                        <td>{job.id}</td>
                        <td>{job.name}</td>
                        <td>{job.address}</td>
                        <td>{job.phone}</td>
                        <td>{job.datebi.toString()}</td>
                        <td>{job.crew}</td>
                        <td><Link to={`/job_details/${job.id}`} className='btn btn-primary'>Job Details</Link></td>

                      </tr>
                      )
                    )
                  }
              </tbody>
            </table>
        </div>
      );
    }else{
      return(
        <div>
           <LoadingPage />
        </div>
      );

    }
  }

}

const mapStateToProps = (state) => {
  console.log('STATE:', state)
  return {
    jobs: state.jobs.completed_jobs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({startFetchCompletedJobs}, dispatch)
  };
}

const smartCompletedJobs = connect(mapStateToProps, mapDispatchToProps)(CompletedJobs);

export default smartCompletedJobs;



// <div className='container'>
//   <div className='row'>
//     <div className='col-md-2'>
//     </div>
//     <div className='col-md-8'>
//       <table className='table table-striped'>
//         <thead className='thead-inverse'>
//           <tr>
//             <th colSpan='5'>Completed Jobs</th>
//           </tr>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>Phone</th>
//             <th>Date Done</th>
//             <th>Crew Name</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             this.props.jobs.map(job => (
//               <tr key={job.id}>
//                 <td>{job.id}</td>
//                 <td>{job.name}</td>
//                 <td>{job.address}</td>
//                 <td>{job.phone}</td>
//                 <td>{job.datebi.toString()}</td>
//                 <td>{job.crew}</td>
//                 <td><Link to={`/job_details/${job.id}`} className='btn btn-primary'>Job Details</Link></td>
//
//               </tr>
//               )
//             )
//           }
//       </tbody>
//     </table>
//   </div>
//   <div className='col-md-2'>
//   </div>
// </div>
// </div>}
// )
