'use client'

import React, { useEffect, useState } from 'react'

const Category = ({ filter, input, pageNo }) => {

    const [selectedValue, setSelectedValue] = useState("all category")
    const [category, setCategory] = useState([])


    const getData = async () => {
        const res = await fetch('https://dummyjson.com/products/categories')
        const data = await res.json()
        setCategory(data)
    }

    // console.log(category);
    useEffect(() => {
        getData();
    }, [])

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        filter({
            search: "",
            category: e.target.value
        })
        pageNo(0)
        input("");
        console.log("i m clicked");
    }

    return (
        <>
            <div className="category ms-5">
                <select name="category" id="mySelect" value={selectedValue} onChange={handleChange}>
                    <option value="all category">All Category</option>

                    {category.map((curElem, ind) => {

                        return (
                            <option value={curElem} key={ind} className='text-capitalize' >{curElem}</option>
                        )
                    })}

                </select>

            </div>

        </>
    )
}

export default Category