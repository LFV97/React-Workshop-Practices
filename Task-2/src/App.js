import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [moreInfo, setMoreInfo] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(()=>{
    fetchJobs()
  }, []);

  if(loading){
    return (
      <div className='section loading'>
        <h1>...Loading...</h1>
      </div>
    )
  }

  const { company, title, dates, duties } = jobs[value];
  const showMoreInfo = moreInfo ? duties : duties.map((duty)=> `${duty.slice(0,100)}...`);

  return (
    <main className='section'>
      <div className='title'>
        <h2>experience</h2>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button key={item.id}
              onClick={()=>setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}>{item.company}
              </button>
            )
          })}
        </div>
        <section className='job-info'>
          <h3>{company}</h3>
          <h4>{title}</h4>
          <h5 className='job-date'>{dates}</h5>
          {showMoreInfo.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <span>{duty}</span>
              </div>
            )
          })}
        </section>
      </div>
      <button type="button" className="btn"
      onClick={() => setMoreInfo(!moreInfo)}>{moreInfo ? 'less info' : 'more info'}
      </button>
    </main>
  )
}

export default App
