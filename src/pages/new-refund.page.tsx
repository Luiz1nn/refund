export function NewRefundPage() {
  return (
    <div className="rounded-2xl bg-gray-500 max-w-lg mx-auto p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl text-gray-100">
          Nova solicitação de reembolso
        </h1>
        <span className="text-sm text-gray-200">
          Dados da despesa para solicitar reembolso.
        </span>
      </div>
    </div>
  );
}
