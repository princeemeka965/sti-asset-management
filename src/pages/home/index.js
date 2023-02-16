import Header from "@/components/header";
import MetaTags from "@/components/metaTags";
import SubHeader from "@/components/sub-headers";
import Section from "./section";

export default function Home() {
    const metaTags = {
        title : 'Sti Assets Management Limited | Home'
    }
    return (
        <>
            <MetaTags tags={metaTags} />
            <SubHeader />
            <Header page='home' />
            <Section />
        </>
    )
}