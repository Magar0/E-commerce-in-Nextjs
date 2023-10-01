
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import { AiOutlineStar } from "react-icons/ai";
import "@/../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/styles/modal.module.css"

export default function BasicModal({ ...props }) {
    const { id, title, description, price, category, brand, rating, thumbnail, popup, modal, setModal } = props

    return (
        <div>
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className={styles.modal}>
                    <button className={`${styles.btn_cross} btn border-danger  fs-4 text-danger float-end`} onClick={() => setModal(false)}>X</button>
                    <h2 id="modal-title" className='mb-4 fw-bold'> {title} </h2>

                    <div className="row">

                        <div className="col-6">
                            <Image src={thumbnail} className="rounded-4 mb-3" height={200} width={250} alt="thumbnail" />
                        </div>

                        <div className="offset-md-2 col-6 col-md-4">
                            <p></p>
                            <p className="ms-4">{rating}<AiOutlineStar className={styles.str} /> </p>
                            <ul><li>Price: &#8377;{price}</li></ul>
                            <ul><li>Brand:{brand}</li></ul>
                        </div>

                        <p id='modal-description'>{description}</p>
                        <Link href={`/${id}`}>
                            <button className="btn fs-3 px-4 btn-primary">Order</button>
                        </Link>

                    </div>
                </div>
            </Modal>
        </div>
    );
}
