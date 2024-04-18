import React, { useState } from 'react';
import './ProjectPage.css';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FormattedMessage } from 'react-intl';
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [modalStates, setModalStates] = useState({
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
  });

  const toggleModal = (key) => {
    setModalStates({ ...modalStates, [key]: !modalStates[key] });
  };

  const showModal = (key) => {
    return modalStates[key];
  };

  const projectInfo = [
    {
      id: 17,
      imagePath: './proyecto-17.jpg',
      completionImagePath: './proyecto-17-com.png',
      infoMessages: ['projects-info-14-p1'],
      textMessages: ['projects-info-14-p2'],
      link: 'https://nahuel61920.github.io/TatoFood/',
      technologies: ['html5', 'css3', 'javascript', 'jquery'],
    },
    {
      id: 14,
      imagePath: './proyecto-14.jpg',
      completionImagePath: './proyecto-14-com.png',
      infoMessages: ['projects-info-14-p1'],
      textMessages: ['projects-info-14-p2'],
      link: 'https://nahuel61920.github.io/Justice',
      technologies: ['html5', 'css3', 'javascript', 'bootstrap', 'jquery'],
    },
    {
      id: 15,
      imagePath: './proyecto-15.jpg',
      completionImagePath: './proyecto-15-com.png',
      infoMessages: ['projects-info-14-p1'],
      textMessages: ['projects-info-14-p2'],
      link: 'https://nahuel61920.github.io/Magical-Effect/',
      technologies: ['html5', 'css3', 'javascript', 'jquery'],
    },
    {
      id: 16,
      imagePath: './proyecto-16.jpg',
      completionImagePath: './proyecto-16-com.png',
      infoMessages: ['projects-info-14-p1'],
      textMessages: ['projects-info-14-p2'],
      link: 'https://nahuel61920.github.io/ProjectName/',
      technologies: ['html5', 'css3', 'javascript'],
    },
    {
      id: 13,
      imagePath: './proyecto-13.jpg',
      completionImagePath: './proyecto-13-com.png',
      infoMessages: ['projects-info-14-p1'],
      textMessages: ['projects-info-14-p2'],
      link: 'https://nahuel61920.github.io/InspiredGamer',
      technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
    },
  ];

  const renderProjects = () => {
    return projectInfo.map((project) => (
      <div key={project.id} className="projects__item">
        <a onClick={() => toggleModal(project.id)}>
          <img
            src={proyectsImg(project.imagePath)}
            alt=""
            className="projects__img"
          />
        </a>
      </div>
    ));
  };

  const renderModalContent = (project) => {
    return (
      <div className="content-modal">
        <div className="pw-content">
          <div className="eins-modal-preview">
            <img src={proyectsImg(project.completionImagePath)} alt="" />
            <div className="eins-modal-text-3">
              <span>
                <FormattedMessage
                  id="projects-tec"
                  defaultMessage="Used technology:"
                />
              </span>
              <div className="eins-modal-tec">
                {project.technologies.map((icon) => (
                  <img
                    key={icon}
                    src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}/${icon}-original.svg`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="eins-modal-text">
            {project.infoMessages.map((messageId) => (
              <h2 key={messageId}>
                <FormattedMessage id={messageId} defaultMessage="" />
              </h2>
            ))}
            <br />
            {project.textMessages.map((messageId) => (
              <p key={messageId}>
                <FormattedMessage id={messageId} defaultMessage="" />
              </p>
            ))}
            <div className="eins-modal-text-2">
              <span>Link:</span>{' '}
              <a href={project.link} target="_blank">
                {project.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" defaultMessage="websites" />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          {renderProjects()}
        </section>
      </main>

      {projectInfo.map((project) => (
        <Modal
          key={project.id}
          estado={showModal(project.id)}
          cambiarEstado={() => toggleModal(project.id)}>
          {renderModalContent(project)}
        </Modal>
      ))}

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Project;
