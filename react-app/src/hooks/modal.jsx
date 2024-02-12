import { useState } from 'react';

export default function useModal({status,heading}) {

    const [ModalOpen , setModalOpen] = useState(status);  
    const [Heading , setHeading] = useState(heading);    
    const [Content , setContent] = useState('');    
    return [ ModalOpen, setModalOpen , Heading, setHeading , Content , setContent];
  }