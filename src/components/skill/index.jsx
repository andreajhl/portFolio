import { technologies } from '@ui/icons';
import wordings from '@wordings';
import './styles.scss';

const SkillItem = ({ title, icon }) => (
  <div className='skill-item'>
    <span className='skill-icon' aria-hidden='true'>{icon}</span>
    <p className='skill-title'>{title}</p>
  </div>
);

const Skill = () => {
  const {
    skill: {
      title,
      content,
    },
  } = wordings;


  return (
    <div className='skill'>
      <h2 className='skill-main-title'>{title}</h2>
      <hr aria-hidden='true' className='skill-divider' />
      <div className='skill-grid'>
          {content.map((tool, index) => (
            <SkillItem
              key={tool}
              title={tool}
              icon={technologies[index]}
            />
          ))}
        </div>
    </div>
  );
};

export default Skill;
