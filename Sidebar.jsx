import { cn } from '@/Lib/utils';
import { Link } from '@inertiajs/react';
import { PiHouse, PiLockKeyOpen, PiPlus, PiSquaresFour, PiUser } from 'react-icons/pi';

export default function Sidebar({ auth, url, workspaces }) {
    return (
        <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
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
                                href={route('logout')}
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
                    <ul role="list" className="mt-2 -mx-2 space-y-2">
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
                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white dark:bg-red-500 text-[0.625rem] font-medium',
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
                <li className="mt-auto -mx-6">
                    <Link
                        href='#'
                        className="flex items-center px-6 py-3 text-sm font-semibold leading-relaxed gap-x-4 text-foreground hover:bg-gray-100 hover:dark:bg-gray-800"
                    >
                        <img className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white" src={auth.avatar} alt={auth.name} />
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">{auth.name}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
