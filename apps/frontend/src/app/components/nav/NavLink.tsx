import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    label: string;
    icon?: ReactNode;
    highlight?: boolean;
    isActive?: boolean;
}

export default function NavLink({ href, label, icon, highlight = false, isActive = false }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`px-4 py-3 md:py-0 flex items-center text-[#3d4750] font-medium transition-colors duration-200
                ${!highlight && isActive ? 'text-[#8093e0] border-b-2 border-[#8093e0]' : ''}
                ${!highlight && 'hover:text-[#8093e0]'}
            `}
        >
            {highlight ? (
                <span className="bg-[#8093e0]/20 p-1 rounded-md mr-1">
                    <span className="text-[#8093e0]">{label}</span>
                </span>
            ) : (
                <>
                    <span>{label}</span>
                    {icon && <span className="ml-1">{icon}</span>}
                </>
            )}
        </Link>
    );
}
