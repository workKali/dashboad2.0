'use client'

import { useState } from 'react'
import TabNavigation from '@/shared/components/TabNavigation'

export const TopNavigation = () => {
    const [activeNavigation, setActiveNavigation] = useState<string | number>('home1')

    return (
        <TabNavigation
            value={activeNavigation}
            onChange={setActiveNavigation}
            tabs={[
                { label: 'Resumen', value: 'home1' },
                { label: 'Cartera', value: 'home2' },
                { label: 'Monitoreo', value: 'Fincas' },
            ]}
        />
    )
}
