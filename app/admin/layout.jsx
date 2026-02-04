import SideBarCompo from "@/components/SideBarCompo";

export default function AdminLayout({ children }) {
  return (
    <section className=" min-h-screen w-screen text-black flex">
      {/* Sidebar (STATIC) */}
      <div className="min-h-screen md:w-1/5  shadow-lg ">
        <SideBarCompo />
      </div>
      {/* <div className="fixed md:relative left-0 top-0 h-full w-64 md:w-1/5 bg-white shadow-lg transform -translate-x-full md:translate-x-0 transition-transform">
        <SideBarCompo />
      </div> */}
      {/* Dynamic Content */}
      <div className="flex-1 px-3">{children}</div>
    </section>
  );
}
