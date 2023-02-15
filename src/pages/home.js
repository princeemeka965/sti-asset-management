import Link from "next/link";
import MetaTags from "../components/metaTags";
import SubHeader from "../components/sub-headers";


export default function Home() {
    const metaTags = {
        title : 'Sti Assets Management Limited | Home'
    }
    return (
        <>
            <MetaTags tags={metaTags} />
            <SubHeader />
        </>
    )
}