import * as React from 'react';
import {
  Check,
  ChevronDown,
  ChevronRight,
  Settings,
  User,
  Search,
  Bell,
  Inbox,
  Package,
} from 'lucide-react';

// Preview components using actual fly-by components
export const componentPreviews: Record<string, React.ReactNode> = {
  'fb-button': (
    <div className="flex flex-wrap gap-2 items-center">
      <button className="fb-button -appearance-solid -color-informative -size-m inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 bg-[#002CED] text-white hover:bg-[#0025c4]">
        Primary
      </button>
      <button className="fb-button -appearance-outlined -color-informative -size-m inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 border-2 border-[#002CED] text-[#002CED] bg-transparent hover:bg-[#e6ebfd]">
        Outlined
      </button>
      <button className="fb-button -appearance-flat -color-neutral -size-m inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200">
        Flat
      </button>
    </div>
  ),
  'fb-card': (
    <div className="fb-card w-64 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This is a card component with elevation and border.
        </p>
      </div>
    </div>
  ),
  'fb-input': (
    <input
      className="fb-input w-64 rounded-md border-2 border-gray-300 bg-transparent h-9 px-3 text-sm outline-none focus:border-[#002CED] focus:ring-2 focus:ring-[#002CED]/20"
      placeholder="Enter text..."
      defaultValue="Sample input"
    />
  ),
  'fb-label': (
    <label className="fb-label text-sm font-medium text-gray-900 dark:text-gray-100">
      Form Label
    </label>
  ),
  'fb-textarea': (
    <textarea
      className="fb-textarea w-64 h-24 rounded-md border-2 border-gray-300 bg-transparent px-3 py-2 text-sm outline-none resize-none focus:border-[#002CED]"
      placeholder="Enter text..."
      defaultValue="Sample textarea content"
    />
  ),
  'fb-text': (
    <div className="space-y-2">
      <p className="fb-text -level-xl text-xl">Extra Large Text</p>
      <p className="fb-text -level-l text-lg">Large Text</p>
      <p className="fb-text -level-m text-base">Medium Text (Default)</p>
      <p className="fb-text -level-s text-sm text-gray-600">Small Text</p>
    </div>
  ),
  'fb-separator': (
    <div className="w-64 space-y-2">
      <p className="text-sm">Content Above</p>
      <div className="fb-separator h-px bg-gray-200 dark:bg-gray-700" />
      <p className="text-sm">Content Below</p>
    </div>
  ),
  'fb-badge': (
    <div className="flex flex-wrap gap-2">
      <span className="fb-badge -appearance-flat -color-informative -size-m inline-flex items-center justify-center rounded-full h-6 px-2.5 text-xs font-medium bg-[#e6ebfd] text-[#002CED]">
        New
      </span>
      <span className="fb-badge -appearance-solid -color-positive -size-m inline-flex items-center justify-center rounded-full h-6 px-2.5 text-xs font-medium bg-green-600 text-white">
        Success
      </span>
      <span className="fb-badge -appearance-outlined -color-negative -size-m inline-flex items-center justify-center rounded-full h-6 px-2.5 text-xs font-medium border-2 border-red-600 text-red-600 bg-transparent">
        Error
      </span>
    </div>
  ),
  'fb-spinner': (
    <div className="flex gap-4 items-center">
      <div className="h-4 w-4 border-2 border-[#002CED] border-t-transparent rounded-full animate-spin" />
      <div className="h-6 w-6 border-2 border-[#002CED] border-t-transparent rounded-full animate-spin" />
      <div className="h-8 w-8 border-2 border-[#002CED] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
  'fb-skeleton': (
    <div className="space-y-2 w-64">
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
  ),
  'fb-kbd': (
    <div className="flex gap-1 items-center">
      <kbd className="fb-kbd inline-flex items-center justify-center h-6 px-2 rounded border border-gray-300 bg-gray-100 text-xs font-mono">
        ⌘
      </kbd>
      <span className="text-sm">+</span>
      <kbd className="fb-kbd inline-flex items-center justify-center h-6 px-2 rounded border border-gray-300 bg-gray-100 text-xs font-mono">
        K
      </kbd>
    </div>
  ),
  'fb-avatar': (
    <div className="flex gap-2 items-center">
      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
        U
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
        YF
      </div>
      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-base font-medium text-gray-600">
        FB
      </div>
    </div>
  ),
  'fb-aspect-ratio': (
    <div
      className="w-48 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden"
      style={{ aspectRatio: '16/9' }}
    >
      <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
        16:9 Aspect Ratio
      </div>
    </div>
  ),
  'fb-progress': (
    <div className="w-64 space-y-3">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-3/5 bg-[#002CED] rounded-full transition-all" />
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-4/5 bg-green-600 rounded-full transition-all" />
      </div>
    </div>
  ),
  'fb-toggle': (
    <div className="flex gap-2">
      <button className="h-9 w-9 rounded-md flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-bold">
        B
      </button>
      <button className="h-9 w-9 rounded-md flex items-center justify-center bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 italic">
        I
      </button>
    </div>
  ),
  'fb-checkbox': (
    <div className="flex gap-4 items-center">
      <div className="h-5 w-5 rounded border-2 border-gray-300" />
      <div className="h-5 w-5 rounded border-2 border-[#002CED] bg-[#002CED] flex items-center justify-center">
        <Check className="h-3 w-3 text-white" />
      </div>
      <div className="h-5 w-5 rounded border-2 border-green-600 bg-green-600 flex items-center justify-center">
        <Check className="h-3 w-3 text-white" />
      </div>
    </div>
  ),
  'fb-switch': (
    <div className="flex gap-4 items-center">
      <div className="h-6 w-11 rounded-full bg-gray-300 p-0.5">
        <div className="h-5 w-5 rounded-full bg-white transition-transform" />
      </div>
      <div className="h-6 w-11 rounded-full bg-[#002CED] p-0.5 flex justify-end">
        <div className="h-5 w-5 rounded-full bg-white transition-transform" />
      </div>
      <div className="h-6 w-11 rounded-full bg-green-600 p-0.5 flex justify-end">
        <div className="h-5 w-5 rounded-full bg-white transition-transform" />
      </div>
    </div>
  ),
  'fb-radio-group': (
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full border-2 border-[#002CED] flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-[#002CED]" />
        </div>
        <span className="text-sm">Option 1</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
        <span className="text-sm">Option 2</span>
      </div>
    </div>
  ),
  'fb-select': (
    <button className="w-48 h-9 px-3 rounded-md border-2 border-gray-300 text-gray-700 bg-transparent flex items-center justify-between text-sm">
      Select option
      <ChevronDown className="h-4 w-4" />
    </button>
  ),
  'fb-native-select': (
    <select className="w-48 px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-900">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  ),
  'fb-alert': (
    <div className="w-64 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
      <h5 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
        Information
      </h5>
      <p className="text-xs text-blue-800 dark:text-blue-200">
        This is an informational alert message.
      </p>
    </div>
  ),
  'fb-accordion': (
    <div className="w-64 border rounded-lg">
      <div className="border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm font-medium">Section 1</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 dark:bg-gray-800">
          Content for section 1
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-medium">Section 2</span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  ),
  'fb-tabs': (
    <div className="w-64">
      <div className="flex border-b border-gray-200">
        <button className="px-4 py-2 text-sm border-b-2 border-[#002CED] text-[#002CED] font-medium">
          Tab 1
        </button>
        <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
          Tab 2
        </button>
        <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
          Tab 3
        </button>
      </div>
      <div className="pt-4 text-sm">Tab 1 content</div>
    </div>
  ),
  'fb-breadcrumb': (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-500 hover:text-gray-900 cursor-pointer">Home</span>
      <ChevronRight className="h-3 w-3 text-gray-400" />
      <span className="text-gray-500 hover:text-gray-900 cursor-pointer">Products</span>
      <ChevronRight className="h-3 w-3 text-gray-400" />
      <span className="text-[#002CED] font-medium">Detail</span>
    </div>
  ),
  'fb-pagination': (
    <div className="flex items-center gap-1">
      <button className="h-8 px-3 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">
        ←
      </button>
      <button className="h-8 px-3 rounded-md bg-[#002CED] text-white text-sm font-medium">
        1
      </button>
      <button className="h-8 px-3 rounded-md hover:bg-gray-100 text-sm">2</button>
      <button className="h-8 px-3 rounded-md hover:bg-gray-100 text-sm">3</button>
      <button className="h-8 px-3 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">
        →
      </button>
    </div>
  ),
  'fb-table': (
    <table className="w-64 text-sm border-collapse">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-2 px-3 font-medium">Name</th>
          <th className="text-left py-2 px-3 font-medium">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-100">
          <td className="py-2 px-3">John Doe</td>
          <td className="py-2 px-3">Admin</td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="py-2 px-3">Jane Smith</td>
          <td className="py-2 px-3">User</td>
        </tr>
      </tbody>
    </table>
  ),
  'fb-calendar': (
    <div className="p-3 border rounded-lg w-64">
      <div className="text-center text-sm font-medium mb-3">December 2024</div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-gray-400 py-1">
            {d}
          </div>
        ))}
        {[...Array(31)].map((_, i) => (
          <div
            key={i}
            className={`py-1 rounded hover:bg-gray-100 cursor-pointer ${
              i === 14 ? 'bg-[#002CED] text-white hover:bg-[#0025c4]' : ''
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  'fb-command': (
    <div className="w-64 border rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Type a command..."
          className="flex-1 outline-none text-sm bg-transparent"
        />
      </div>
      <div className="p-1">
        <div className="px-2 py-1.5 text-sm hover:bg-gray-100 rounded cursor-pointer">
          <User className="h-4 w-4 inline mr-2" />
          Profile
        </div>
        <div className="px-2 py-1.5 text-sm hover:bg-gray-100 rounded cursor-pointer">
          <Settings className="h-4 w-4 inline mr-2" />
          Settings
        </div>
      </div>
    </div>
  ),
  'fb-dropdown-menu': (
    <div className="relative inline-block">
      <button className="fb-button -appearance-flat -color-neutral -size-m inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200">
        <Settings className="h-4 w-4" />
        Menu
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  ),
  'fb-toast': (
    <div className="w-80 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h5 className="text-sm font-semibold mb-1">Notification</h5>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your changes have been saved successfully.
          </p>
        </div>
        <Bell className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  ),
  'fb-empty': (
    <div className="fb-empty flex flex-col items-center justify-center text-center py-8 gap-3">
      <div className="fb-empty-icon flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full blur-lg opacity-50" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border border-gray-300 dark:border-gray-600">
            <Inbox className="h-8 w-8 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="fb-empty-title text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
          No data available
        </h3>
        <p className="fb-empty-description text-sm text-gray-500 dark:text-gray-400">
          Try adjusting your filters
        </p>
      </div>
    </div>
  ),
  'fb-item': (
    <div className="w-48 space-y-1">
      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <User className="h-4 w-4 text-gray-500" />
        <span className="text-sm">Profile</span>
      </div>
      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg">
        <Settings className="h-4 w-4 text-gray-900" />
        <span className="text-sm font-medium">Settings</span>
      </div>
    </div>
  ),
  'fb-tooltip': (
    <div className="relative inline-block">
      <button className="px-3 py-1.5 rounded-md bg-gray-100 text-sm">
        Hover me
      </button>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
        Tooltip text
      </div>
    </div>
  ),
  'fb-popover': (
    <div className="relative inline-block">
      <button className="px-3 py-1.5 rounded-md border-2 border-gray-300 text-sm">
        Open
      </button>
      <div className="absolute top-10 left-0 w-48 p-3 bg-white border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-700">Popover content</p>
      </div>
    </div>
  ),
  'fb-dialog': (
    <div className="w-72 p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Dialog Title</h3>
      <p className="text-sm text-gray-600 mb-4">This is a modal dialog example.</p>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-1.5 rounded-md text-sm bg-gray-100">Cancel</button>
        <button className="px-3 py-1.5 rounded-md text-sm bg-[#002CED] text-white">
          Confirm
        </button>
      </div>
    </div>
  ),
  'fb-alert-dialog': (
    <div className="w-72 p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Are you sure?</h3>
      <p className="text-sm text-gray-600 mb-4">This action cannot be undone.</p>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-1.5 rounded-md text-sm bg-gray-100">Cancel</button>
        <button className="px-3 py-1.5 rounded-md text-sm bg-red-600 text-white">Delete</button>
      </div>
    </div>
  ),
  'fb-sheet': (
    <div className="w-80 h-48 bg-white border-l-2 border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-2">Sheet Panel</h3>
      <p className="text-sm text-gray-600">Side panel content goes here.</p>
    </div>
  ),
  'fb-drawer': (
    <div className="w-80 h-40 bg-white border-t-2 border-gray-200 p-6 rounded-t-2xl">
      <h3 className="text-lg font-semibold mb-2">Bottom Drawer</h3>
      <p className="text-sm text-gray-600">Swipe or click to dismiss.</p>
    </div>
  ),
  'fb-context-menu': (
    <div className="w-48 bg-white border border-gray-200 rounded-lg p-1">
      <div className="px-2 py-1.5 text-sm hover:bg-gray-100 rounded cursor-pointer">
        Copy
      </div>
      <div className="px-2 py-1.5 text-sm hover:bg-gray-100 rounded cursor-pointer">
        Paste
      </div>
      <div className="h-px bg-gray-200 my-1" />
      <div className="px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded cursor-pointer">
        Delete
      </div>
    </div>
  ),
  'fb-hover-card': (
    <div className="relative inline-block">
      <span className="text-sm text-[#002CED] cursor-pointer underline">@username</span>
      <div className="absolute top-6 left-0 w-64 p-4 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-gray-500">@username</p>
          </div>
        </div>
        <p className="text-xs text-gray-600">User bio and details</p>
      </div>
    </div>
  ),
  'fb-sonner': (
    <div className="w-80 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-green-600" />
        <div className="flex-1">
          <p className="text-sm font-medium">Success</p>
          <p className="text-xs text-gray-600">Operation completed</p>
        </div>
      </div>
    </div>
  ),
  'fb-collapsible': (
    <div className="w-64 border rounded-lg">
      <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50">
        <span className="text-sm font-medium">Can I use this?</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="px-4 py-3 text-sm text-gray-600 border-t">
        Yes, this component is fully supported.
      </div>
    </div>
  ),
  'fb-toggle-group': (
    <div className="inline-flex rounded-lg border border-gray-200">
      <button className="px-3 py-1.5 text-sm bg-[#002CED] text-white font-bold rounded-l-lg">
        B
      </button>
      <button className="px-3 py-1.5 text-sm hover:bg-gray-100 border-l border-gray-200 italic">
        I
      </button>
      <button className="px-3 py-1.5 text-sm hover:bg-gray-100 border-l border-gray-200 underline rounded-r-lg">
        U
      </button>
    </div>
  ),
  'fb-navigation-menu': (
    <nav className="flex items-center gap-6 px-4 py-2 bg-white border-b border-gray-200">
      <span className="text-sm font-medium text-[#002CED] cursor-pointer">
        Home
      </span>
      <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
        Products
      </span>
      <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
        About
      </span>
    </nav>
  ),
  'fb-menubar': (
    <div className="flex items-center gap-1 bg-gray-50 border-b border-gray-200 px-2 py-1">
      <button className="px-2 py-1 text-sm hover:bg-gray-100 rounded">File</button>
      <button className="px-2 py-1 text-sm hover:bg-gray-100 rounded">Edit</button>
      <button className="px-2 py-1 text-sm hover:bg-gray-100 rounded">View</button>
      <button className="px-2 py-1 text-sm hover:bg-gray-100 rounded">Help</button>
    </div>
  ),
  'fb-scroll-area': (
    <div className="w-48 h-32 border rounded-lg overflow-hidden">
      <div className="h-full overflow-y-auto p-3 text-sm text-gray-600">
        <p>Scrollable content area with custom scrollbar styling.</p>
        <p className="mt-2">Lorem ipsum dolor sit amet...</p>
        <p className="mt-2">More content here...</p>
      </div>
    </div>
  ),
  'fb-resizable': (
    <div className="flex h-32 w-64 border rounded-lg overflow-hidden">
      <div className="flex-1 bg-gray-50 p-3 text-sm">Panel 1</div>
      <div className="w-px bg-gray-300 cursor-col-resize" />
      <div className="flex-1 bg-gray-100 p-3 text-sm">Panel 2</div>
    </div>
  ),
  'fb-combobox': (
    <div className="w-48">
      <button className="w-full flex items-center justify-between px-3 py-2 border-2 border-gray-300 rounded-md text-sm">
        Select item...
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="mt-1 w-full border border-gray-200 rounded-lg bg-white max-h-32">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 text-sm border-b"
        />
        <div className="p-1">
          <div className="px-2 py-1.5 text-sm hover:bg-gray-100 rounded">Option 1</div>
          <div className="px-2 py-1.5 text-sm hover:bg-gray-100 rounded">Option 2</div>
        </div>
      </div>
    </div>
  ),
  'fb-slider': (
    <div className="w-64 space-y-4">
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="absolute h-2 w-3/5 bg-[#002CED] rounded-full" />
        </div>
        <div
          className="absolute top-0 left-[60%] -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white border-2 border-[#002CED] rounded-full cursor-pointer"
          style={{ top: '0.25rem' }}
        />
      </div>
    </div>
  ),
  'fb-input-otp': (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          className="w-10 h-12 text-center border-2 border-gray-300 rounded-lg text-lg font-mono focus:border-[#002CED]"
          defaultValue={i <= 4 ? i : ''}
        />
      ))}
    </div>
  ),
  'fb-form': (
    <form className="w-64 space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-sm"
          placeholder="you@example.com"
        />
      </div>
      <button className="w-full px-4 py-2 bg-[#002CED] text-white rounded-md text-sm font-medium">
        Submit
      </button>
    </form>
  ),
  'fb-field': (
    <div className="w-64">
      <label className="text-sm font-medium block mb-1">Username</label>
      <input
        type="text"
        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-sm"
        placeholder="Enter username"
      />
      <p className="text-xs text-gray-500 mt-1">This is your public display name.</p>
    </div>
  ),
  'fb-input-group': (
    <div className="w-64">
      <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
        <span className="px-3 bg-gray-100 text-sm text-gray-600">https://</span>
        <input
          type="text"
          className="flex-1 px-3 py-2 text-sm outline-none"
          placeholder="example.com"
        />
        <span className="px-3 bg-gray-100 text-sm text-gray-600">.com</span>
      </div>
    </div>
  ),
  'fb-button-group': (
    <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
      <button className="px-4 py-2 text-sm bg-[#002CED] text-white">Left</button>
      <button className="px-4 py-2 text-sm hover:bg-gray-100 border-l border-gray-200">
        Center
      </button>
      <button className="px-4 py-2 text-sm hover:bg-gray-100 border-l border-gray-200">
        Right
      </button>
    </div>
  ),
  'fb-data-table': (
    <div className="w-80 border rounded-lg">
      <div className="p-3 border-b">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1.5 border rounded text-sm"
        />
      </div>
      <table className="w-full text-sm">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="text-left py-2 px-3 font-medium">Name ↑</th>
            <th className="text-left py-2 px-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-3">John Doe</td>
            <td className="py-2 px-3">
              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                Active
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  'fb-date-picker': (
    <div className="relative">
      <button className="flex items-center gap-2 px-3 py-2 border-2 border-gray-300 rounded-md text-sm">
        <span>📅</span>
        <span>Dec 29, 2025</span>
      </button>
    </div>
  ),
  'fb-carousel': (
    <div className="w-64 relative">
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-sm text-gray-500">Slide 1 of 3</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-3">
        <button className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
          ‹
        </button>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-[#002CED]" />
          <div className="h-2 w-2 rounded-full bg-gray-300" />
          <div className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
        <button className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
          ›
        </button>
      </div>
    </div>
  ),
  'fb-chart': (
    <div className="w-80 h-48 border rounded-lg p-4">
      <div className="flex items-end justify-between h-full gap-2">
        <div className="flex-1 bg-[#002CED] rounded-t" style={{ height: '60%' }} />
        <div className="flex-1 bg-[#002CED] rounded-t" style={{ height: '80%' }} />
        <div className="flex-1 bg-[#002CED] rounded-t" style={{ height: '45%' }} />
        <div className="flex-1 bg-[#002CED] rounded-t" style={{ height: '90%' }} />
        <div className="flex-1 bg-[#002CED] rounded-t" style={{ height: '70%' }} />
      </div>
    </div>
  ),
  'fb-sidebar': (
    <div className="w-64 h-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-sm">Navigation</h3>
      </div>
      <nav className="flex-1 p-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e6ebfd] text-[#002CED] text-sm font-medium cursor-pointer">
          <span>🏠</span>
          Home
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm cursor-pointer">
          <span>⚙️</span>
          Settings
        </div>
      </nav>
    </div>
  ),
  'hello-world': (
    <div className="text-center py-6">
      <h1 className="text-2xl font-bold text-[#002CED] mb-2">Hello World</h1>
      <p className="text-sm text-gray-600">Welcome to fly-by design system</p>
    </div>
  ),
  'example-form': (
    <div className="w-80 p-6 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-sm"
        />
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-sm"
        />
        <textarea
          placeholder="Your message"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-sm h-20 resize-none"
        />
        <button className="w-full px-4 py-2 bg-[#002CED] text-white rounded-md text-sm font-medium">
          Send Message
        </button>
      </div>
    </div>
  ),
  'example-login': (
    <div className="w-80 p-8 bg-white rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-sm"
        />
        <button className="w-full px-4 py-3 bg-[#002CED] text-white rounded-md text-sm font-medium">
          Sign In
        </button>
      </div>
    </div>
  ),
};

// Default preview for components without specific preview
export const defaultPreview = (
  <div className="flex flex-col items-center justify-center text-center py-8 gap-3">
    <div className="relative">
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full blur-lg opacity-30" />
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border border-gray-300 dark:border-gray-600">
        <Package className="h-7 w-7 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400">Preview not available</p>
  </div>
);
