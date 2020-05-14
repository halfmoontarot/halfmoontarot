import React from 'react';
import ModalPresentation from '../components/Modal/ModalPresentation';
import styles from '../components/Modal/ModalPresentation.module.css'

export default {
  component: ModalPresentation,
  title: 'Modal Presentation',                
};

const modalContent = <div>This is the content of the modal</div>

export const Default = () => <ModalPresentation styles={styles} modalContent={modalContent} titleModal={"This is the title"}>Call to Action</ModalPresentation>;
