'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Box,
    Button,
    Drawer,
    Menu,
    MenuItem,
    Avatar,
    Typography,
    IconButton,
    Divider,
} from '@mui/material';
import {
    Menu as MenuIcon,
    FilterList,
    Download,
    Notifications,
    AccountCircle,
    Settings,
    Logout,
} from '@mui/icons-material';
import TabsNavigation from '@/shared/components/TabNavigation';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

// Internal Topbar Component
const Topbar = ({
    onToggleAside,
    userMenuAnchor,
    onUserMenuClick,
    onUserMenuClose,
}: {
    onToggleAside: () => void;
    userMenuAnchor: HTMLElement | null;
    onUserMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    onUserMenuClose: () => void;
}) => {
    const pathname = usePathname();

    const navigationTabs = [
        { href: '/dashboard', label: 'Overview' },
        { href: '/dashboard/summary', label: 'Summary' },
        { href: '/dashboard/summary2', label: 'Summary' },
        { href: '/dashboard/summary3', label: 'Summary' },
        { href: '/dashboard/summary4', label: 'Summary' },
        { href: '/dashboard/summary5', label: 'Summary' },
        { href: '/dashboard/summary6', label: 'Summary' },
        { href: '/dashboard/summary7', label: 'Summary' },
    ];

    return (
        <div className="grid sm:flex items-center justify-between border-b border-gray-200 bg-white flex-col md:flex-row w-full">
            {/* Left: Navigation Tabs */}
            <Box className="flex items-center gap-2 md:gap-6 overflow-x-auto w-full">
                {navigationTabs.map((tab) => {
                    const isActive = pathname === tab.href ||
                        (tab.href !== '/dashboard' && pathname.startsWith(tab.href));

                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`
                px-2 md:px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap shrink-0
                ${isActive
                                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }
              `}
                        >
                            {tab.label}
                        </Link>
                    );
                })}
            </Box>

            {/* Right: Action Buttons + User Dropdown */}
            <Box className="flex items-center gap-2 md:gap-3 shrink-0">
                {/* Action Buttons */}
                <IconButton
                    onClick={onToggleAside}
                    className="text-gray-600 hover:text-gray-900"
                    size="small"
                >
                    <FilterList />
                </IconButton>

                <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Download />}
                    className="text-gray-600 border-gray-300 hover:text-gray-900 hidden sm:flex"
                >
                    Export
                </Button>

                <IconButton className="text-gray-600 hover:text-gray-900" size="small">
                    <Notifications />
                </IconButton>

                {/* User Dropdown */}
                <IconButton
                    onClick={onUserMenuClick}
                    className="text-gray-600 hover:text-gray-900"
                    size="small"
                >
                    <Avatar className="w-8 h-8 bg-blue-600 text-white text-sm">
                        U
                    </Avatar>
                </IconButton>

                <Menu
                    anchorEl={userMenuAnchor}
                    open={Boolean(userMenuAnchor)}
                    onClose={onUserMenuClose}
                    className="mt-1"
                >
                    <MenuItem onClick={onUserMenuClose}>
                        <Box className="flex items-center gap-3">
                            <AccountCircle className="text-gray-600" />
                            <Box>
                                <Typography variant="body2" className="font-medium">
                                    User Name
                                </Typography>
                                <Typography variant="caption" className="text-gray-500">
                                    user@example.com
                                </Typography>
                            </Box>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={onUserMenuClose}>
                        <Box className="flex items-center gap-3">
                            <AccountCircle className="text-gray-600" />
                            Profile
                        </Box>
                    </MenuItem>
                    <MenuItem onClick={onUserMenuClose}>
                        <Box className="flex items-center gap-3">
                            <Settings className="text-gray-600" />
                            Settings
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={onUserMenuClose}>
                        <Box className="flex items-center gap-3">
                            <Logout className="text-gray-600" />
                            Logout
                        </Box>
                    </MenuItem>
                </Menu>
            </Box>
        </div>
    );
};

// Internal AsidePanel Component
const AsidePanel = ({
    open,
    onClose,
    isMobile,
}: {
    open: boolean;
    onClose: () => void;
    isMobile: boolean;
}) => {
    const panelContent = (
        <Box className="p-6 h-full">
            <Typography variant="h6" className="mb-6 font-semibold">
                Filters & Options
            </Typography>

            {/* Date Range */}
            <Box className="mb-6">
                <Typography variant="subtitle2" className="mb-3 text-gray-700">
                    Date Range
                </Typography>
                <Box className="space-y-3">
                    <Box>
                        <label className="block text-sm text-gray-600 mb-1">From</label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </Box>
                    <Box>
                        <label className="block text-sm text-gray-600 mb-1">To</label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </Box>
                </Box>
            </Box>

            {/* Categories */}
            <Box className="mb-6">
                <Typography variant="subtitle2" className="mb-3 text-gray-700">
                    Categories
                </Typography>
                <Box className="space-y-2">
                    {['All', 'Sales', 'Revenue', 'Users', 'Products'].map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                defaultChecked={category === 'All'}
                            />
                            <span className="text-sm text-gray-700">{category}</span>
                        </label>
                    ))}
                </Box>
            </Box>

            {/* Status */}
            <Box className="mb-6">
                <Typography variant="subtitle2" className="mb-3 text-gray-700">
                    Status
                </Typography>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                </select>
            </Box>

            {/* Action Buttons */}
            <Box className="flex gap-3 mt-auto">
                <Button
                    variant="contained"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={onClose}
                >
                    Apply Filters
                </Button>
                <Button
                    variant="outlined"
                    className="flex-1 border-gray-300 text-gray-700"
                    onClick={onClose}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    );

    if (isMobile) {
        return (
            <Drawer
                anchor="right"
                open={open}
                onClose={onClose}
                className="md:hidden"
            >
                <Box className="w-80 h-full">
                    {panelContent}
                </Box>
            </Drawer>
        );
    }

    return (
        <Box
            className={`
        fixed right-0 top-0 h-full bg-white border-l border-gray-200 shadow-lg
        transition-transform duration-300 ease-in-out z-40
        ${open ? 'translate-x-0' : 'translate-x-full'}
      `}
            sx={{ width: 320, pt: 8 }}
        >
            {panelContent}
        </Box>
    );
};

// Main DashboardLayout Component
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [showFilterForm, setShowFilterForm] = useState(false);

    return (
        <div className='flex flex-1 min-w-0 overflow-hidden'>
            <div id='dashboard-content' className="max-w-screen-2xl mx-auto min-w-0 w-full box-border overflow-hidden">
                <div className='min-h-11 flex items-stretch px-4 bg-white border-b border-[#e1e8e7]'>
                    <TopNavigation />
                    <div>
                        <button onClick={() => setShowFilterForm(!showFilterForm)}>Filter</button>
                    </div>
                </div>
                {children}
            </div>
            <div id='filter-aside' className={`${showFilterForm ? 'w-75' : 'w-0'} min-w-0 overflow-hidden shrink-0 transition-[width] duration-300 ease-in-out flex flex-col`}>
                <div className="w-75 h-full flex flex-col border-l border-gray-200 bg-white">
                    <FilterForm />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

const TopNavigation = () => {
    const [activeNavigation, setActiveNavigation] = useState('home1');

    return (
        <TabsNavigation
            value={activeNavigation}
            onChange={setActiveNavigation}
            tabs={[{ label: 'Resumen', value: 'home1' }, { label: 'Cartera', value: 'home2' }, { label: 'Monitoreo', value: 'Fincas' }]}
        />
    );
}

const FilterForm = () => {
    return <div>
        FilterForm
    </div>
}