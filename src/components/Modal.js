import '../css/modal.css';


export const Modal = ({ children, isOpen, closeModal }) => {

    return (
        <>
            <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
                <div className='modal-container' >
                    {children}
                </div>
            </div>
        </>

    )
}
