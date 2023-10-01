
import styles from "@/app/styles/productpage.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GoBack from "../components/button/GoBack";
import BasicPopover from "../components/button/PopOver";

const Page = async ({ params }) => {
    const { id } = params;

    const url = `https://dummyjson.com/products/${id}`

    const res = await fetch(url);
    const data = await res.json();
    const main_data = data;

    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        images
    } = main_data;

    return (
        <>
            {!main_data.message &&

                <section className={styles.page}>
                    <div className={styles.goBack} > <GoBack /> </div>
                    <h3 className="text_head">
                        {" "}
                        <span style={{ textTransform: "capitalize" }}>{category}</span> \ <span className={styles.type}> {title} </span>
                    </h3>
                    {/* <h2 className={styles.title}>{title}</h2> */}
                    <div className={styles.container}>
                        <div className={styles.image}>
                            <Image src={images[0]} height={350} width={300} alt="img" />
                            <p className={styles.flex}>
                                <i> {stock} Stock </i>
                                <i> {discountPercentage} % discount </i>
                            </p>
                        </div>
                        <div className={styles.details}>
                            <p>{rating}⭐</p>
                            <ul>
                                <li>
                                    <p>Price: &#8377;{price}/-</p>
                                </li>
                                <li>
                                    <p>Brand:{brand}</p>
                                </li>
                                <li>
                                    <p>Status: {stock > 0 ? "Available" : "Not Available"}</p>
                                </li>
                            </ul>
                            {/* <Button variant="contained" color="success">Order Now</Button> */}
                            <BasicPopover />
                        </div>
                    </div>

                    <p className={styles.description}>
                        <span>Description: </span> {description}
                    </p>
                </section>
            }
            {main_data.message && <div className={styles.err}> <h2>{main_data.message} </h2>
                <Link href="/"> <Button size="large" variant="outlined" color="error" >Homepage</Button> </Link></div>}

        </>
    );
};

export default Page;
