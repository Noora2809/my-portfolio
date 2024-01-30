import React from 'react'

function Skills() {
  return (
    <div>
        <div className="center-column w-50 text-center mb-5 mt-5" style={{marginLeft:'450px'}}>
      <h3 className='mb-3 text-center'>Skills</h3>
      <div className='border border-2 border-primary p-5'>
        {/* HTML5 */}
        <div className="language-item">
          <p>HTML5</p>
          <div className="progress-bar">
            <div style={{ width: '65%' }}>
              <span className="progress-label">65%</span>
            </div>
          </div>
        </div>

        {/* CSS3 */}
        <div className="language-item">
          <p>CSS3</p>
          <div className="progress-bar">
            <div style={{ width: '60%' }}>
              <span className="progress-label">60%</span>
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="language-item">
          <p>JavaScript</p>
          <div className="progress-bar">
            <div style={{ width: '65%' }}>
              <span className="progress-label">65%</span>
            </div>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="language-item">
          <p>Bootstrap</p>
          <div className="progress-bar">
            <div style={{ width: '62%' }}>
              <span className="progress-label">62%</span>
            </div>
          </div>
        </div>

        {/* React.js */}
        <div className="language-item">
          <p>React.js</p>
          <div className="progress-bar">
            <div style={{ width: '62%' }}>
              <span className="progress-label">62%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills