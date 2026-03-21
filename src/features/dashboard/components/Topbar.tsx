'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    Box,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Typography,
    IconButton,
    Divider,
} from '@mui/material';
import {
    FilterList,
    Download,
    Notifications,
    AccountCircle,
    Settings,
    Logout,
} from '@mui/icons-material';

interface TopbarProps {
    onToggleAside: () => void;
    userMenuAnchor: HTMLElement | null;
    onUserMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    onUserMenuClose: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
    onToggleAside,
    userMenuAnchor,
    onUserMenuClick,
    onUserMenuClose,
}) => {
    const pathname = usePathname()

    const navigationTabs = [
        { href: '/dashboard', label: 'Overview' },
        { href: '/dashboard/summary', label: 'Summary' },
        { href: '/dashboard/summary2', label: 'Summary' },
        { href: '/dashboard/summary3', label: 'Summary' },
        { href: '/dashboard/summary4', label: 'Summary' },
        { href: '/dashboard/summary5', label: 'Summary' },
        { href: '/dashboard/summary6', label: 'Summary' },
        { href: '/dashboard/summary7', label: 'Summary' },
    ]

    return (
        <div className="grid sm:flex items-center justify-between border-b border-gray-200 bg-white flex-col md:flex-row w-full">
            {/* Left: Navigation Tabs */}
            <Box className="flex items-center gap-2 md:gap-6 overflow-x-auto w-full">
                {navigationTabs.map((tab) => {
                    const isActive = pathname === tab.href ||
                        (tab.href !== '/dashboard' && pathname.startsWith(tab.href))

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
                    )
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
    )
}
