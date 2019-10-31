import React from 'react'
import './projects.scss'
import proj1 from '../../images/proj1.jpg'
import proj2 from '../../images/proj2.jpg'
import proj3 from '../../images/proj3.jpg'
import proj4 from '../../images/proj4.jpg'
import proj5 from '../../images/proj5.jpg'

const Projects = () => {
	return (
		<section className="c-projects">
			<div className="l-container">
				<h2 className="c-projects__heading">Projects</h2>
				<div className="l-projects__wrapper">

					<div className="c-proj">
						<figure>
							<img src={proj1} alt="placeholder1"/> 
							<figcaption>Project 1</figcaption>
						</figure>
						<button>View project</button>
					</div>
					<div className="c-proj">
						<figure>
							<img src={proj2} alt="placeholder2"/> 
							<figcaption>Project 2</figcaption>
						</figure>
						<button>View project</button>
					</div>
					<div className="c-proj">
						<figure>
							<img src={proj3} alt="placeholder3"/> 
							<figcaption>Project 3</figcaption>
						</figure>
						<button>View project</button>
					</div>
					<div className="c-proj">
						<figure>
							<img src={proj4} alt="placeholder4"/> 
							<figcaption>Project 4</figcaption>
						</figure>
						<button>View project</button>
					</div>
					<div className="c-proj">
						<figure>
							<img src={proj5} alt="placeholder5"/> 
							<figcaption>Project 5</figcaption>
						</figure>
						<button>View project</button>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Projects
