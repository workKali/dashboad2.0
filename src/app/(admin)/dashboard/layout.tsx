import { DashboardLayout } from "@/features/dashboard/components/DashboardLayout";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}
