import "./App.css";
import { PageRouting } from "./PageRouting";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1D64C8",
        },
        components: {
          Segmented: {
            itemSelectedBg: "#1D64C8",
          },
        },
      }}
    >
      <PageRouting />
    </ConfigProvider>
  );
}

export default App;
