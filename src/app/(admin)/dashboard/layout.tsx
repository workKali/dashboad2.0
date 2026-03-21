import { DashboardLayout } from "@/features/dashboard";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}
