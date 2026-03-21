'use client'

import { Box, Typography, Button, Drawer } from '@mui/material'

interface AsidePanelProps {
    open: boolean
    onClose: () => void
    isMobile: boolean
}

export const AsidePanel: React.FC<AsidePanelProps> = ({
    open,
    onClose,
    isMobile,
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
    )

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
        )
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
    )
}
