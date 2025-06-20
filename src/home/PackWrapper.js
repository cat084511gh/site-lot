const PackWrapper = ({ children }) => {
  return (
    <div class="flex space-x-4 items-center justify-center rounded-xl py-10 px-20 shadow-lg text-white bg-gradient-to-br from-white via-rose-200 to-rose-500">
      {children}
    </div>
  );
};

export default PackWrapper;
