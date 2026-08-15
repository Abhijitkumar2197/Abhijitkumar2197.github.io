import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "That page does not exist.",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-16">
      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-brass">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        That page does not exist.
      </h1>
      <p className="mt-5 max-w-xl text-ash">
        The link may be out of date, or the address slightly off. The work and
        the homepage are both one click away.
      </p>
      <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <Link
          href="/"
          className="text-brass underline-offset-4 hover:underline"
        >
          Go to the homepage
        </Link>
        <Link
          href="/#work"
          className="text-ash underline-offset-4 hover:text-bone hover:underline"
        >
          See the work
        </Link>
        <Link
          href="/about/"
          className="text-ash underline-offset-4 hover:text-bone hover:underline"
        >
          About
        </Link>
      </p>
    </div>
  );
}
