import Header from "../../../header/header";
import Footer from "../../../footer";
import Link from "next/link";
import { client } from "../../../../libs/client";
// import { client } from "../index";


export default function Home(props) {
    return (
        <>
            <Header />
            {props.news.map((obj) => {
                return (
                    <Link href={"/blog/" + obj.id}>
                        <div>
                            <li> {obj.title} </li>
                        </div>
                    </Link>
                );
            })}
            <Link href={"../design"}>back</Link>
            <Footer />
        </>
    );
}

export const getStaticProps = async () => {
    // libs/clinet.jsで設定したmicroCMSからデータを非同期で取ってくる
    const news = await client.get({
        endpoint: "blog",
        queries: {
            // limit: 5,
            filters: 'kind[contains]design'
        },
    })

    return {
        props: {
            news: news.contents,
        }
    }
}
