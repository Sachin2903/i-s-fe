import CopyRight from "@/component/landingPage/copyRight";
import Footer from "@/component/landingPage/footer";
import Navbar from "@/component/landingPage/navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="w-dvw h-dvh relative overflow-h-auto overflow-x-hidden">
        <Navbar color={true}/>
        <section className="w-full min-h-dvh">{
            children
        }</section>
        <Footer />
        <CopyRight />

    </main>
}
