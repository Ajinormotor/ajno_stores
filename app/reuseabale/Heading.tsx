interface HeadingProps {
    title: string;
  }
  
  const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
      <div className="border-l-[3px] border-black rounded-sm p-2">
        <h1 className="text-black font-bold text-3xl">{title}</h1>
      </div>
    );
  };
  
  export default Heading;
  