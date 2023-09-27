import HomePage from "../Pages/HomePage";

type layoutChange = { name: string };
const LayoutContentChange = ({ name }: layoutChange) => {
  console.log("key: " + name);
  switch (name) {
    case "1":
      return <HomePage />;
    case "2":
      return (
        <div>
          <h2>This is another tab</h2>
        </div>
      );
    default:
      return (
        <div>
          <h2>This is default</h2>
          <h2>Abc</h2>
        </div>
      );
  }
};

export default LayoutContentChange;
