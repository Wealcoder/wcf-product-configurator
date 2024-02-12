const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '3px',
    position: 'relative',
    width: '80%',
    maxWidth: 'max-content',
    minWidth: '400px',
    textAlign: 'left'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer'
  },
    
};

function Modal({ children, onClose }) {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          {children}
          <button style={styles.closeButton} onClick={onClose}>X</button>
        </div>
      </div>
    );
  }

export default Modal;