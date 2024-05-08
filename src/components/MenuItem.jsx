import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-blue-600">
      <Icon className="text-3xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
