//クライアント側でも処理が必要という認識のためのもの
//usestateやuseeffectの時は必要！！


import './lib';
import ClientComp from "./components/clientComp"
import { ENDPOINT } from '@/constants';
import ArticleList from '@/components/articleList';


export default async function SSR(){

    const articles = await fetch(ENDPOINT).then(res =>
         res.json());
    return(
        <>
        <div>SSR Page</div>
        <ClientComp />
        <ArticleList list={articles} basepath="/010_SSR"/>
        </>
    )
}
