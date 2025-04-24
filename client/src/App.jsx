import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Layout />
    </>
  );
}

export default App;
