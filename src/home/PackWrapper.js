const PackWrapper = ({ children }) => {
  return (
    <div class="flex space-x-4 items-center justify-center rounded-xl min-h-screen w-screen shadow-lg text-white bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-white via-gray-300 to-gray-500 bg-[length:120%_100%]">
      {children}
    </div>
  );
};

export default PackWrapper;
