import { MainLayout } from '@/shared/components/MainLayout';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}
