import { client } from "../libs/client";
import React, { Component } from 'react'
import Link from "next/link";
import Image from 'next/image'
import { format } from 'date-fns';
import Header from "./header/header";
import Footer from "./footer";
import styles from "./scss01/index.module.scss";

import HorizontalScroll from 'react-scroll-horizontal';

export default function Home(props) {
  const parent = { width: `100vw`, height: `calc(100vh - 231px)`, display: `block`, margin:`0 auto` }
  const child = { width: `250px`, height: `300px`, color: `red`,  }
  return (
    <>

      <Header />
      <div style={parent} className={styles.parent}>
        <HorizontalScroll reverseScroll={true} animValues={0}>

          {props.news.map((obj) => {
            const formatYMD = (date) => format(new Date(date), 'yyyy.MM.dd');
            let img
            if (obj.img) {
              const url = obj.img.url
              img = <img src={url} />
            } else {
              img = <img src="/noImage.png" />
            }
            return (
              <div style={child} className={styles.child}>
                <div className={styles.blogitemWrapper}>
                  <Link href={"/blog/" + obj.id}>
                    <a className={styles.blogItem}>
                      <div>
                        <p className={styles.kind}>{obj.kind}</p>
                        {img}
                        <h3> {obj.title} </h3>

                        <p className={styles.date}>{formatYMD(obj.publishedAt)}</p>
                      </div>

                    </a>
                  </Link>
                </div>
              </div>
            );
          })}


        </HorizontalScroll>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  // libs/clinet.jsで設定したmicroCMSからデータを非同期で取ってくる
  const news = await client.get({
    endpoint: "blog",
    queries: {
      // limit: 5,
      // filters: 'kind[contains]tech'
    },
  })

  return {
    props: {
      news: news.contents,
    }
  }
}
