const MainLayout = ({ children }) => {
  return (
    <main className="bg-primary px-4 py-12 md:px-16 md:py-22 xl:px-28 xl:py-44">
      {children}
    </main>
  );
};

export default MainLayout;
