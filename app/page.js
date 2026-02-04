import AdminTitle from "@/components/AdminTitle";
import EntryProduct from "@/components/EntryProduct.action";
import InfoMedia from "@/components/InfoMedia";
import ProductEntry from "@/components/ProductEntry";
import SearchItem from "@/components/SearchItem";
import SideBarCompo from "@/components/SideBarCompo";

export default async function Home() {
  return (
    <section className="bg-white min-h-screen text-black flex ">
      {/* <div className="min-h-screen   md:w-1/5 bg-amber-400/10">
        <SideBarCompo />
      </div>
      <div className="flex-1 px-3">
        <form action={EntryProduct}>
          <SearchItem />
          <AdminTitle />
          <InfoMedia />
        </form>
      </div> */}
    </section>
  );
}
