import { RefundsSearch } from "~/contexts/refunds/components/refunds-search";

export function HomePage() {
  return (
    <section className="p-10 bg-gray-500 flex flex-col gap-6 rounded-2xl max-w-270.5 mx-auto">
      <h1 className="font-bold text-xl">Solicitações</h1>

      <RefundsSearch />
    </section>
  );
}
