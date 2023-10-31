import Navbar from "../components/navbar";
import Mainpage from "../components/mainpage";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-screen flex">
      <div className="">
        <Navbar />
        <Mainpage />
        <Footer />
      </div>
    </div>
  );
}
