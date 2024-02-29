import React from 'react';
import { techIcons, toolIcons} from '../../../public/assets/icons';
import './styles.scss';
import wordings from '@/wordings';

const Skill = () => {
  const {
    skill: {
      title,
      tech: {
        title: techTitle,
        ...techContent
      },
      tools: {
        title: toolsTitle,
        items: toolsContent
      }
    },
  } = wordings;

  return (
    <section className='skill section-container'>
      <h2 className='section-title'>{title}</h2>
      <span className='section-line-title'></span>
      <div className='skill__content'>
        <div className='skill__content-info'>
          <h3 className='skill__content-info-title'>{techTitle}</h3>
          <div className='skill__content-info-item'>
            {Object.keys(techContent).map(key => (
              <div key={key}>
                <p>{techContent[key].title}</p>
                {
                  techContent[key].items.map((item, index) => (
                    <div key={item}>
                      <span className='icon'>{techIcons[key][index]}</span>
                      <p>{item}</p>
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
        <div className='skill__content-info'>
          <h3 className='skill__content-info-title'>{toolsTitle}</h3>
          <div className='skill__content-info-item'>
            {toolsContent.map((text, index) => (
              <div key={text}>
                <span className='icon'>{toolIcons[index]}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>   
    </section>
  )
}

export default Skill;