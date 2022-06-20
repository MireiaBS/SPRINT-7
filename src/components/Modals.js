import { Modal } from "./Modal"
import '../css/modal.css';
import { useModal } from "../components/useModal"

export const Modals = (props) => {
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  let modal = <>
    <input className='modal-button' type='button' value='i' onClick={openModal} />
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <div >Aqui debe indicar el número de páginas que tendrá su web</div>
    </Modal>
  </>
  let modal2 = <>
    <input className='modal-button' type='button' value='i' onClick={openModal2} />
    <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
      <div >Aqui debe indicar el número de idiomas que tendrá su web</div>
    </Modal>
  </>
  return ( props.modal ==1 ? modal : modal2 )
}
