import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Mr. Fish Comics | Admin Dashboard",
  description: "Mr. Fish Comics | Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
