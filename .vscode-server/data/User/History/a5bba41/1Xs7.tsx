import { GetStaticPaths,GetStaticProps,NextPage } from "next";
import Head from 'next/head'
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type PostProps = {   
    id : string
}

const Post: NextPage<PostProps> = (props) => {
    const {id} = props
    const router = useRouter()
}