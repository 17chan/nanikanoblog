import { useRouter } from "next/router";
import Header from "../header/header";
import { client } from "../../libs/client";

export default function post(props) {
    const router = useRouter();
    const { id } = router.query;

    // idとあってるやつをblogデータから取ってきて、そのcontentsを返す関数
    let content = "みつからん";
    const findPostById = (id) => {
        props.news.forEach((obj) => {
            if (obj.id == id) {
                content = obj.content;
            }
        });
        return content;
    };

    const findNewsByid = (id) => {
        const Newnews = props.news.find((obj) => obj.id == id);
        return Newnews;
    };
    const newsTitle = <h1>{findNewsByid(id).title}</h1>;
    // props.news.map((obj)=>(
    //     <div>{obj.title}</div>
    // ))

    // ロード中なら・・・
    if (router.isFallback) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Header />
                <div>{newsTitle}</div>
                <div dangerouslySetInnerHTML={{ __html: findPostById(id) }} />
            </div>
        );
    }
}

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export async function getStaticPaths() {
    const data = await client.get({ endpoint: "blog" });
    // ["/posts/jf3ij23", "/posts/sldfkajsdf"]などが入る
    const paths = data.contents.map((obj) => `/blog/${obj.id}`);

    // 事前ビルドしたいパスをpathsとして渡す
    return { paths, fallback: true };
}

// ルーティングの情報が入ったparamsを受け取る
export async function getStaticProps() {
    const news = await client.get({ endpoint: "blog" });
    return { props: { news: news.contents } };
}
