import Navbar from "@/app/(dashboard)/_components/Navbar";
import OrgSidebar from "@/app/(dashboard)/_components/OrgSidebar";
import Sidebar from "@/app/(dashboard)/_components/sidebar";

export default function DashboardLayout({ children }: ChildrenProps) {
  return (
    <main className="w-full h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="flex-1 h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
