import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[720px] w-full rounded-[8px] border-[1px] border-b-black mt-[90px] p-[32px]">
        <Header></Header>

        <Form></Form>
      </div>
      <Footer></Footer>
    </div>
  );
}
