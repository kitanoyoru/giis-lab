import { ToolPanel } from "../ToolPanel";
import { AlgorithmSelector } from "../AlgorithmSelector";

export const SideBar = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <h3 className="p-3 text-center font-medium text-white">
            Line Algorithms
          </h3>
          <AlgorithmSelector
            containerClassName="space-y-2 font-medium"
            buttonClassName="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          />
          <h3 className="p-3 text-center font-medium text-white">Tools</h3>
          <ToolPanel
            containerClassName="space-y-2 font-medium"
            buttonClassName="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          />
        </div>
      </aside>
    </>
  );
};
