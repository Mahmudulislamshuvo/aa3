const EmptyCart = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 text-center">
        {/* Icon Circle */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 7h14M10 21a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-900">
          Your cart is empty
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          There&apos;s nothing here yet.
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
