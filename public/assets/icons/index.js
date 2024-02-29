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
  SiChartdotjs,
  SiRedux,
  SiMui 
} from 'react-icons/si';

const languages = [
  <SiJavascript />,
  <SiTypescript />,
  <IoLogoHtml5 />,
];

const frameworks = [
  <SiReact />,
  <SiRedux />,
  <TbBrandNextjs />,
  <IoLogoNodejs/>,
  <SiExpress />,
];

const styles = [
  <IoLogoCss3 />,
  <SiSass />,
  <SiBootstrap />,
  <SiMui />
];

const testing = [
  <SiJest />,
];

const analysis = [
  <DiGoogleAnalytics />,
];

const graphics = [
  <SiChartdotjs />,
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
  testing,
  analysis,
  graphics,  
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
  SiChartdotjs,
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
