import { ClipGallery } from "./ClipGallery";
import { ReelCreator } from "./ReelCreator";
import { ReelEditor } from "./ReelEditor";
import { useStore } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const reel = useStore((state) => state.reelInEdit);

  return (
    <>
      <ToastContainer />
      <section className="bg-red-500 h-80 pt-5">
        {reel ? <ReelEditor /> : <ReelCreator />}
      </section>
      <ClipGallery />
    </>
  );
}

export default App;
