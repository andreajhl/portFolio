
import { projectCard, projectsCarousel } from '@constants/projects';
import Modal from '@ui/modal';
import wordings from '@wordings';
import './styles.scss';

const DescriptionProject = ({ descriptionData, stackLabel }) => {
  const { job, subtitle, stackTechnology, description } = descriptionData;
  const listItem = stackTechnology.replaceAll(' /', ',');

  return (
    <div className='project-description'>
      <div className='project-description-head'>
        <h3 className='project-description-title'>{job}</h3>
        <p className='project-description-title--lighter'>{subtitle}</p>
      </div>
      <p className='project-description-content'>{description}</p>
      <p className='project-description-footer'>
        {stackLabel} <span className='project-description-footer--lighter'>{listItem}</span>
      </p>
    </div>
  );
};

const ProjectCard = ({ job, position, date, logo, children }) => (
  <article className='project-card'>
    <div
      className='project-card-image'
      aria-label={`Logo of ${job}`}
      style={{ background: `url(${logo}) center/contain no-repeat` }}
    />
    <div className='project-card-details'>
      <h3 className='project-card-job'>{job}</h3>
      <h4 className='project-card-position'>{position}</h4>
      <p className='project-card-date'>{date}</p>
    </div>
    {children}
  </article>
);

const Projects = () => {
  const { projects: { title, learnMore, stackLabel, projects } } = wordings;
  const projectNames = Object.keys(projects);

  return (
    <div className='projects'>
      <h2 className='projects-title'>{title}</h2>
      <hr aria-hidden='true' className='projects-divider' />
      <div className='projects-grid'>
        {
          projectNames.map(key => (
            <ProjectCard
              {...projects[key]}
              key={projects[key].job}
              logo={projectCard[key]}
            >
              <Modal
                textBtn={learnMore}
                photosCarousels={projectsCarousel[key]}
                customClass='project-footer'
              >
                <DescriptionProject
                  descriptionData={projects[key]}
                  stackLabel={stackLabel}
                />
              </Modal>                
            </ProjectCard>
          ))
        }      
      </div>
    </div>
  );
};

export default Projects;