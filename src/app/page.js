'use client'

import { useEffect, useState } from "react";
import "@/../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "@/app/page.module.css"
import ProductCard from "./components/productComponent/ProductCard";
import Search from "./components/homeComponent/Search";

const Home = () => {

  const [mainData, setMainData] = useState([])
  const [filter, setFilter] = useState({
    search: "",
    category: "all category",
  })
  const [totalItems, setTotalItems] = useState(0);
  const [pageNo, setPageNo] = useState(0)

  // filtering data..........
  let type;
  if (filter.search) {
    type = `/search?q=${filter.search}&`
  } else {
    type = (filter.category === "all category") ? "?" : `/category/${filter.category}?`;
  }

  const getData = async () => {
    try {
      const limit = 6;
      const skip = pageNo * 6

      const res = await fetch(`https://dummyjson.com/products${type}limit=${limit}&skip=${skip} `)
      const data = await res.json()

      setTotalItems(data.total)
      setMainData(pre => ([...pre, ...data.products]))
      setPageNo(pageNo + 1)

    } catch (err) {
      console.log("Error1:", err);
    }
  }


  useEffect(() => {
    setMainData([])
    getData();
  }, [filter])


  const loadMore = () => {
    setTimeout(() => getData(), 1000)
  }


  return (
    <>
      {(mainData == []) && <h2>Loading....🏃🏾‍♂️🏃🏾‍♂️</h2>}
      {mainData &&

        <section className={styles.main_section}>
          <h1 className="text-center text_head">Products Listing</h1>

          <Search filter={setFilter} mainData={setMainData} pageNo={setPageNo} />

          <InfiniteScroll dataLength={mainData.length} next={loadMore} hasMore={mainData.length < totalItems}

            loader={
              <div className={styles.loading}>
                <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                (<b>{totalItems ? "Yay! You have seen it all 🫡" : "Nothing Found 😔"}</b>)
              </p>
            }>

            <div className={styles.container}>
              {
                mainData.map((curElem, ind) => {
                  return <ProductCard key={curElem.id} {...curElem} />
                })
              }
            </div>

          </InfiniteScroll>

        </section >
      }

    </>
  )
}

export default Home;