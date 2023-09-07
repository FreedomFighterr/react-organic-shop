import styles from './Modal.module.scss';

const Modal = (props) => {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;