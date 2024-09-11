export default function Sidebar() {
    return (
        <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
                        {/* menu */}
                    </ul>
                </li>
                <li>
                    {/* workspaces */}
                </li>
                <li className="mt-auto -mx-6">
                    {/* profile */}
                </li>
            </ul>
        </nav>
    );
}
