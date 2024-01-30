import React from 'react'

function About() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
            <h2 className='text-center mb-5 mt-5'>About Me</h2>
            <div className="col d-flex" style={{marginLeft:'300px',marginRight:'200px'}}>
                <div className="col-6">
                    <h3>Hi, Please to meet you. Please have a look at my profile</h3>
                </div>
                <div className="col-6">
                    <p>I am an enthusiastic and results-oriented MEARN (MongoDB, Express.js, Angular, React, Node.js) developer with a solid background in full-stack web development. I successfully completed my Bachelor's degree in Computer Science and Engineering, achieving a CGPA of 8.19. My foray into the realm of programming originated from a keen interest in developing interactive and dynamic web applications. Over the course of my professional journey, I have refined my skills and gained significant experience, enabling me to engineer resilient and efficient solutions</p>
                    <div className="col d-flex">
                    <h5>Follow me - </h5><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram text-primary me-4 ms-2 fs-5"></i></a> <i class="fa-brands text-primary fa-linkedin me-4 fs-5"></i><i class="fa-brands text-primary fa-github fs-5"></i>
                    </div>
                    <div className="resume text-center mt-4 mb-5">
                        <a href="https://drive.google.com/file/d/1qdaQFjtmPdtMHe3ZdWJoh1mhby2cU74i/view?usp=drivesdk"><button className='btn btn-outline-primary'>View Resume</button></a>
                    </div>

                </div>
            </div>                
            </div>
        </div>
    </div>
  )
}

export default About