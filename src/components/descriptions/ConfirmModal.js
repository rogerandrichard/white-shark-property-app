import React from 'react'
import Modal from 'react-modal'


const ConfirmModal = (props)=> (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.deletePick}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Do You want to Kill This Transaction??</h3>
      {'Hi Ho' && <p className="modal__body">{'Hi Hos'}</p>}
      <button className="button" onClick={props.killTransaction}>Yes</button>
      <button className="button" onClick={props.noKillTransaction} >No</button>
    </Modal>
  )


export default ConfirmModal
