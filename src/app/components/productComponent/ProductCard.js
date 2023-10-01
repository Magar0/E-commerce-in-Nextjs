'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/../bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/styles/productcard.module.css"
import BasicModal from "../homeComponent/Modal";


const ProductCard = (props) => {

    const [modal, setModal] = useState(false)

    // Object destructuring..........
    const { id, title, description, price, rating, images, thumbnail } = props

    return (
        <>
            <div className={`card shadow m-3 m-md-5 ${styles.main_card}`} onClick={() => { console.log("im clicked"); setModal(true) }}>
                <Image src={thumbnail} className={styles.img} alt="img" height={200} width={300} />
                <div className={`card-body ${styles.body}`}>
                    <h5 className="">{title}</h5>
                    <p className="">{description.substring(0, 50)} {description.length > 50 && "..."} </p>
                </div>
            </div >


            {modal && <BasicModal {...props} modal={modal} setModal={setModal} />}

        </>
    )
}

export default ProductCard;