export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pb-40">
      <h1 className="mb-2 text-6xl font-extrabold text-gray-900">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
    </section>
  );
}
