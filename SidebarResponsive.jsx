import { cn } from '@/Lib/utils';
import { Link } from '@inertiajs/react';
import { PiFilesFill, PiHouse, PiLockKeyOpen, PiPlus, PiSquaresFour, PiUser } from 'react-icons/pi';

export default function SidebarResponsive({ url, workspaces }) {
    return (
        <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white dark:bg-gray-900 grow gap-y-5">
            <div className="flex h-16 shrink-0 items-center space-x-1.5">
                <Link
                    href="/"
                    className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter"
                >
                    Plannify<span className="text-red-500">.</span>
                </Link>
            </div>
            <nav className="flex flex-col flex-1">
                <ul role="list" className="flex flex-col flex-1 gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            <li>
                                <Link
                                    href='#'
                                    className={cn(
                                        url.startsWith('/dashboard')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100 hover:dark:bg-gray-800',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiHouse
                                        className={cn(
                                            url.startsWith('/dashboard') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                        aria-hidden="true"
                                    />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className={cn(
                                        url.startsWith('/users')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100 hover:dark:bg-gray-800',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiUser
                                        className={cn(
                                            url.startsWith('/users') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                        aria-hidden="true"
                                    />
                                    People
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className={cn(
                                        url.startsWith('/my-tasks')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100 hover:dark:bg-gray-800',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiSquaresFour
                                        className={cn(
                                            url.startsWith('/my-tasks') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                        aria-hidden="true"
                                    />
                                    My Tasks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    method="post"
                                    as="button"
                                    className={cn(
                                        url.startsWith('/logout')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100 hover:dark:bg-gray-800',
                                        'group flex w-full gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiLockKeyOpen
                                        className={cn(
                                            url.startsWith('/logout') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                        aria-hidden="true"
                                    />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="flex items-center justify-between">
                            <div className="text-xs font-semibold leading-relaxed uppercase text-foreground">
                                Workspaces
                            </div>
                            <Link href='#'>
                                <PiPlus className="w-4 h-4 text-foreground hover:text-red-500" />
                            </Link>
                        </div>
                        <ul role="list" className="mt-2 -mx-2 space-y-1">
                            {workspaces.map((workspace, index) => (
                                <li key={index}>
                                    <Link
                                        href='#'
                                        className={cn(
                                            route().current('workspaces.show', [workspace.memberable.slug]) ||
                                                route().current('cards.*', [workspace.memberable.slug])
                                                ? 'bg-red-500 text-white'
                                                : 'text-foreground hover:bg-gray-100 hover:dark:bg-gray-800',
                                            'group flex w-full gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                route().current('workspaces.show', [workspace.memberable.slug]) ||
                                                    route().current('cards.*', [workspace.memberable.slug])
                                                    ? 'border-red-600 text-red-600'
                                                    : 'border-foreground text-foreground',
                                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-red-500',
                                            )}
                                        >
                                            {workspace.memberable.name.substring(0, 1)}
                                        </span>
                                        <span className="truncate">{workspace.memberable.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
