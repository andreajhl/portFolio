import { techIcons, toolIcons } from '@ui/icons';
import wordings from '@wordings';
import './styles.scss';

const SkillItem = ({ title, icon }) => (
  <div className='skill-item'>
    <span className='skill-icon' aria-hidden='true'>{icon}</span>
    <p className='skill-title'>{title}</p>
  </div>
);

const SkillList = ({ title, items, icons }) => (
  <section className='skill-list'>
    <h4 className='skill-list-title'>{title}</h4>
    <div className='skill-grid'>
      {items.map((item, index) => (
        <SkillItem
          key={item}
          title={item}
          icon={icons[index]}
        />
      ))}
    </div>
  </section>
);

const SkillSection = ({ title, children }) => (
  <section className='skill-section'>
    <h3 className='skill-section-title'>{title}</h3>
    <div className='skill-section-content'>
      {children}
    </div>
  </section>
);

const Skill = () => {
  const {
    skill: {
      title,
      tech: { title: techTitle, ...techContent },
      tools: { title: toolsTitle, items: toolsContent },
    },
  } = wordings;

  const techItems = Object.keys(techContent);

  return (
    <div className='skill'>
      <h2 className='skill-main-title'>{title}</h2>
      <hr aria-hidden="true" className='skill-divider' />
      <div className='skill-content'>
        <SkillSection title={techTitle}>
          {techItems.map(tech => (
            <SkillList
              key={tech}
              {...techContent[tech]}
              icons={techIcons[tech]}
            />
          ))}
        </SkillSection>
        <SkillSection title={toolsTitle}>
          <div className='skill-grid'>
            {toolsContent.map((tool, index) => (
              <SkillItem
                key={tool}
                title={tool}
                icon={toolIcons[index]}
              />
            ))}
          </div>
        </SkillSection>
      </div>
    </div>
  );
};

export default Skill;
