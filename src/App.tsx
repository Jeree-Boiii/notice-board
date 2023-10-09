import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticeBoard from "./components/NoticeBoard";
import NoticeForm from "./components/NoticeForm";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<NoticeBoard />}></Route>
          <Route path="/add-notice" element={<NoticeForm />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
