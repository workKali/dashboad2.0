'use client'

import { useState } from 'react'
import { TopNavigation } from './TopNavigation'
import clsx from 'clsx'
import { Drawer } from '@mui/material';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [showFilterForm, setShowFilterForm] = useState(false);

    const handleToggleFilter = () => {
        setShowFilterForm(!showFilterForm);
    };

    return (
        <>
            <div className='flex flex-1 min-w-0 overflow-hidden'>
                <div id='dashboard-content' className="mx-auto min-w-0 w-full box-border overflow-hidden">
                    <div className='bg-white border-b border-[#e1e8e7]'>
                        <div className='min-h-11 flex items-center max-w-7xl mx-auto'>
                            <TopNavigation />
                            <div className="ml-auto">
                                <button
                                    onClick={handleToggleFilter}
                                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                                >
                                    Filter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl mx-auto'>
                        {children}
                    </div>
                </div>
                <div className={clsx("hidden md:block transition-[width] duration-300 ease-in-out min-w-0 shrink-0", showFilterForm ? "w-80" : "w-0")}>
                    <div className='border-l border-gray-200 h-full bg-white'>
                        <h3 className="text-lg font-semibold mb-4">Filters</h3>
                        <p className="text-gray-600">Filter options will go here</p>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Drawer */}
            <Drawer
                anchor='right'
                variant="temporary"
                open={showFilterForm}
                onClose={handleToggleFilter}
                ModalProps={{
                    keepMounted: true,
                }}
                className="md:hidden"
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 200,
                    },
                }}
            >
                <div className='border-l border-gray-200 h-full bg-white'>
                    <h3 className="text-lg font-semibold mb-4">Filters</h3>
                    <p className="text-gray-600">Filter options will go here</p>
                </div>
            </Drawer>
        </>
    );
};