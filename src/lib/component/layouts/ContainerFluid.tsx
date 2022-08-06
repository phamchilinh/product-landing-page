interface IPageProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IPageProps) => {
  return (
    <div
      className={`mx-auto w-full ${className} max-w-screen-md md:max-w-full`}
    >
      {children}
    </div>
  );
};

export default Container;
