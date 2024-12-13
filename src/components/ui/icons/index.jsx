import { FaJira } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiGoogleAnalytics, DiScrum } from 'react-icons/di';
import {
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
} from 'react-icons/io';
import {
  SiJavascript,
  SiTypescript,
  SiNewrelic,
  SiExpress,
  SiReact,
  SiTrello,
  SiJest,
  SiGithub,
  SiBootstrap,
  SiSlack,
  SiSass,
  SiRedux,
  SiMui,
  SiPython,
  SiTailwindcss,
  SiCypress,
} from 'react-icons/si';

const languages = [
  <SiJavascript />,
  <SiTypescript />,
  <SiPython />,
  <IoLogoHtml5 />,
];

const frameworks = [
  <SiReact />,
  <SiRedux />,
  <TbBrandNextjs />,
  <IoLogoNodejs/>,
];

const styles = [
  <IoLogoCss3 />,
  <SiSass />,
  <SiTailwindcss />,
  <SiMui />,
  <SiBootstrap />,
];

const others = [
  <SiJest />,
  <SiCypress />,
  <DiGoogleAnalytics />,
];

const toolIcons = [
  <SiGithub />,
  <SiTrello />,
  <FaJira />,
  <DiScrum />,
  <SiSlack />,
];

const techIcons = {
  languages,
  frameworks,
  styles,
  others,
};

export {
  SiJavascript,
  SiTypescript,
  SiNewrelic,
  SiExpress,
  SiReact,
  SiTrello,
  SiJest,
  SiGithub,
  SiBootstrap,
  SiSlack,
  SiSass,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
  DiGoogleAnalytics,
  DiScrum,
  TbBrandNextjs,
  FaJira,
  techIcons,
  toolIcons,
};
