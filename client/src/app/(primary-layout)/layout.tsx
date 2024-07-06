const PrimaryLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
};

export default PrimaryLayout;
