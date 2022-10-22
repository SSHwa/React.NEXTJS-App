import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getSortedPostsData } from "../lib/post";
import homeStyles from "../styles/Home.module.css";

const Home = ({
  allPostsData,
}: {
  allPostData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div>
      <Head>
        <title>황성순</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>My Introduce</p>
        <p>This is a Website</p>
      </section>
      <section className={`{homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
