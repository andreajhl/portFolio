'use client';

import { useState } from 'react';

import Carousel from '@ui/carousel';
import { Modal as ModalBoot } from 'react-bootstrap';
import './styles.scss';

const Modal = ({ textBtn, photosCarousels, customClass, children }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalOpen = () => setModalShow(true);

  return (
    <div className='modal__container'>
      <button
        className={customClass}
        onClick={handleModalOpen}
      >
        {textBtn}
      </button>
      <ModalBoot
        centered
        size='lg'
        show={modalShow}
        onHide={handleModalClose}
        aria-labelledby='custom-modal'
      >
        <ModalBoot.Body>
          <Carousel slides={photosCarousels} />
          <div>{children}</div>
        </ModalBoot.Body>
      </ModalBoot>
    </div>
  );
};

export default Modal;
