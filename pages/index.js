import Link from "next/link";

let links = [
  { path: "/steps", label: "Multistep wizard" },
  { path: "/email", label: "Email client" },
  { path: "/header", label: "Fixed header" },
  { path: "/carousel", label: "Carousel" },
  { path: "/resizable-panel", label: "Resizable panel" },
  { path: "/calendar", label: "Calendar" },
  { path: "/lesson-1", label: "Lesson 1" },
];

export default function HomePage() {
  return (
    <div className="p-8">
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a className="text-blue-600 underline">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
