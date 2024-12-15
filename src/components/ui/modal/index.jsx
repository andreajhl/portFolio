'use client';

import { useState } from 'react';
import Carousel from '@ui/carousel';
import { Modal as ModalBoot } from 'react-bootstrap';
import './styles.scss';

const Modal = ({ textBtn, photosCarousels, customClass, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <div className='modal-container'>
      <button
        className={`modal-trigger ${customClass}`}
        onClick={handleModalOpen}
        aria-label='Open modal'
      >
        {textBtn}
      </button>
      <ModalBoot
        centered
        size='lg'
        show={isModalOpen}
        onHide={handleModalClose}
        aria-labelledby='custom-modal'
        dialogClassName='modal-dialog'
      >
      <ModalBoot.Header closeButton />
        <ModalBoot.Body>
          <Carousel slides={photosCarousels} />
          {children}
        </ModalBoot.Body>
      </ModalBoot>
    </div>
  );
};

export default Modal;
