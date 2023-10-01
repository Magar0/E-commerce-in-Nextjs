"use client"

import { useState } from "react"
import styles from "@/app/styles/search.module.css"
import { FaSearch } from "react-icons/fa";
import Category from "./Category";

const Search = ({ filter, pageNo }) => {

    const [input, setInput] = useState("")


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        console.log("button clicked");
        pageNo(0)
        filter({
            search: input,
            category: "all category"
        }
        )
    }

    return (
        <>
            <div className="d-flex flex-sm-row flex-column align-items-end justify-content-end  flex-wrap me-5">
                <div className="d-flex mb-2">

                    <input type="text" className={styles.search_box} value={input} placeholder="Search Product" onChange={handleChange} />
                    <button className={styles.btn} onClick={() => handleClick()}> <FaSearch /> </button>

                </div>

                <Category filter={filter} input={setInput} pageNo={pageNo} />
            </div >
        </>
    )
}

export default Search