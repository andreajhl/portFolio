import { projectImages } from '@constants/projects';
import wordings from '@wordings';
import Image from 'next/image';
import './styles.scss';

const Project = ({ job, position, date, description, stackTechnology, image, stackLabel }) => {
  const listItem = stackTechnology.replaceAll(' /', ',');

  return (
    <article className='project'>
      <div className='project-banner'>
        <Image
          fill
          src={image.url}
          alt={image.alt}
          className='project-banner-image'
        />
      </div>
      <div className='project-details'>
        <h3 className='project-job' aria-label={`Project role: ${job}`}>{job}</h3>
        <h4 className='project-position' aria-label={`Position: ${position}`}>{position}</h4>
        <span className='project-date'>{date}</span>
        <div className='project-description'>
          <p className='project-description-content'>{description}</p>
          <p className='project-description-footer'>
            {stackLabel} <span className='project-description-footer--lighter'>{listItem}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { projects: { title, projects, stackLabel } } = wordings;
  const projectNames = Object.keys(projects);

  return (
    <div className='projects'>
      <h2 className='projects-title'>{title}</h2>
      <hr aria-hidden='true' className='projects-divider' />
      <div className='projects-list'>
        {
          projectNames.map(key => (
            <Project
              {...projects[key]}
              stackLabel={stackLabel}
              key={projects[key].job}
              image={projectImages[key]}
            />
          ))
        }      
      </div>
    </div>
  );
};

export default Projects;
