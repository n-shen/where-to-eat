import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";

const Pair = () => {
  const { shared_info, screenSize } = useStateContext();
  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      <h1 className="text-center text-3xl font-bold pb-10">
        Decide? Which? Where? Hmmmm.....
      </h1>

      <div className="flex justify-center w-10/12">
        <p className="pl-10 w-full test-center w-full text-2xl font-semibold leading-relaxed text-gray-900 dark:text-white">
          'Pair' allows any two people to decide where to eat together, and is
          pretty easy to use! Simply share following URL{" "}
          <span className="text-green-800">
            https://wheretoeat.nect.app/?room=[Your own word]
          </span>{" "}
          to your friend. After both of you opened the link, enjoy!
        </p>
      </div>
      <p className="px-10">e.x. https://wheretoeat.nect.app/?room=d4w4a9d</p>

      <Footer />
    </div>
  );
};

export default Pair;
