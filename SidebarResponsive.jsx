import { Link } from '@inertiajs/react';

export default function SidebarResponsive() {
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
                            {/* menu */}
                        </ul>
                    </li>
                    <li>
                        {/* workspaces */}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
