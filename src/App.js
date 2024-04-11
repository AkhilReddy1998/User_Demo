import "./App.css";
import { PageRouting } from "./PageRouting";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#C3141A",
        },
        components: {
          Segmented: {
            itemSelectedBg: "#C3141A",
          },
        },
      }}
    >
      <PageRouting />
    </ConfigProvider>
  );
}

export default App;
