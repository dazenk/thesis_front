import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { ScreenProvider } from "./components/ScreenContext";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import FirstTestIns from "./components/FirstTest/FirstTestIns";
import FirstTestInsTwo from "./components/FirstTest/FirstTestInsTwo";
import FirstTestInsThree from "./components/FirstTest/FirstTestInsThree";
import FirstTestInsFour from "./components/FirstTest/FirstTestInsFour";
import FirstScreen from "./components/FirstTest/FirstScreen";
import SecondScreen from "./components/FirstTest/SecondScreen";
import ThirdScreen from "./components/FirstTest/ThirdScreen";
import FourthScreen from "./components/FirstTest/FourthScreen";
import FifthScreen from "./components/FirstTest/FifthScreen";
import SixthScreen from "./components/FirstTest/SixthScreen";
import SeventhScreen from "./components/FirstTest/SeventhScreen";
import EighthScreen from "./components/FirstTest/EighthScreen";
import OtherScreen from "./components/FirstTest/OtherScreen";
import FacesTestIns from "./components/SecondTest/FacesTestIns";
import FacesTestInsTwo from "./components/SecondTest/FacesTestInsTwo";
import FacesTest from "./components/SecondTest/FacesTest";
import EndTest from "./components/SecondTest/EndTest";
import SymbolTestIns from "./components/ThirdTest/SymbolTestIns";
import SymbolTestInsTwo from "./components/ThirdTest/SymbolTestInsTwo";
import SymbolTest from "./components/ThirdTest/SymbolTest";
import SymbolTest2 from "./components/ThirdTest/SymbolTest2";
import SymbolTest3 from "./components/ThirdTest/SymbolTest3";
import SymbolTest4 from "./components/ThirdTest/SymbolTest4";
import SymbolTest5 from "./components/ThirdTest/SymbolTest5";
import SymbolTestEnd from "./components/ThirdTest/SymbolTestEnd";
import SpanTest from "./components/FourthTest/SpanTest";
import SpanTestIns from "./components/FourthTest/SpanTestIns";
import SpanTestInsTwo from "./components/FourthTest/SpanTestInsTwo";
import SpanTestInsThree from "./components/FourthTest/SpanTestInsThree";
import SpanTestInsFour from "./components/FourthTest/SpanTestInsFour";
import SpanTestInsFive from "./components/FourthTest/SpanTestInsFive";
import SpanTestInsSix from "./components/FourthTest/SpanTestInsSix";
import SpanTestInsSeven from "./components/FourthTest/SpanTestInsSeven";
import SpanTestTwo from "./components/FourthTest/SpanTestTwo";
import SpanTestEnd from "./components/FourthTest/SpanTestEnd";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <ScreenProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>}
          />
          <Route path="/FirstTestIns" element={
            <ProtectedRoute>
              <FirstTestIns/>
            </ProtectedRoute>}
          />
          <Route path="/FirstTestInsTwo" element={
            <ProtectedRoute>
              <FirstTestInsTwo/>
            </ProtectedRoute>}
          />
          <Route path="/FirstTestInsThree" element={
            <ProtectedRoute>
              <FirstTestInsThree/>
            </ProtectedRoute>}
          />
          <Route path="/FirstTestInsFour" element={
            <ProtectedRoute>
              <FirstTestInsFour/>
            </ProtectedRoute>}
          />
          <Route path="/FirstScreen" element={
            <ProtectedRoute>
              <FirstScreen/>
            </ProtectedRoute>}
          />
          <Route path="/SecondScreen" element={
            <ProtectedRoute>
              <SecondScreen/>
            </ProtectedRoute>}
          />
          <Route path="/ThirdScreen" element={
            <ProtectedRoute>
              <ThirdScreen/>
            </ProtectedRoute>}
          />
          <Route path="/FourthScreen" element={
            <ProtectedRoute>
              <FourthScreen/>
            </ProtectedRoute>}
          />
          <Route path="/FifthScreen" element={
            <ProtectedRoute>
              <FifthScreen/>
            </ProtectedRoute>}
          />
          <Route path="/SixthScreen" element={
            <ProtectedRoute>
              <SixthScreen/>
            </ProtectedRoute>}
          />
          <Route path="/SeventhScreen" element={
            <ProtectedRoute>
              <SeventhScreen/>
            </ProtectedRoute>}
          />
          <Route path="/EighthScreen" element={
            <ProtectedRoute>
              <EighthScreen/>
            </ProtectedRoute>}
          />
          <Route path="/OtherScreen" element={
            <ProtectedRoute>
              <OtherScreen/>
            </ProtectedRoute>}
          />
          <Route path="/FacesTestIns" element={
            <ProtectedRoute>
              <FacesTestIns/>
            </ProtectedRoute>}
          />
          <Route path="/FacesTestInsTwo" element={
            <ProtectedRoute>
              <FacesTestInsTwo/>
            </ProtectedRoute>}
          />
          <Route path="/FacesTest" element={
            <ProtectedRoute>
              <FacesTest/>
            </ProtectedRoute>}
          />
          <Route path="/EndTest" element={
            <ProtectedRoute>
              <EndTest/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestIns" element={
            <ProtectedRoute>
              <SymbolTestIns/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestInsTwo" element={
            <ProtectedRoute>
              <SymbolTestInsTwo/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTest" element={
            <ProtectedRoute>
              <SymbolTest/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestTwo" element={
            <ProtectedRoute>
              <SymbolTest2/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestThree" element={
            <ProtectedRoute>
              <SymbolTest3/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestFour" element={
            <ProtectedRoute>
              <SymbolTest4/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestFive" element={
            <ProtectedRoute>
              <SymbolTest5/>
            </ProtectedRoute>}
          />
          <Route path="/SymbolTestEnd" element={
            <ProtectedRoute>
              <SymbolTestEnd/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestIns" element={
            <ProtectedRoute>
              <SpanTestIns/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestInsTwo" element={
            <ProtectedRoute>
              <SpanTestInsTwo/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestInsThree" element={
            <ProtectedRoute>
              <SpanTestInsThree/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTest" element={
            <ProtectedRoute>
              <SpanTest/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestInsFour" element={
            <ProtectedRoute>
              <SpanTestInsFour/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestInsFive" element={
            <ProtectedRoute>
              <SpanTestInsFive/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestInsSix" element={
            <ProtectedRoute>
              <SpanTestInsSix/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestInsSeven" element={
            <ProtectedRoute>
              <SpanTestInsSeven/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestTwo" element={
            <ProtectedRoute>
              <SpanTestTwo/>
            </ProtectedRoute>}
          />
          <Route path="/SpanTestEnd" element={
            <ProtectedRoute>
              <SpanTestEnd/>
            </ProtectedRoute>}
          />
          <Route path="/Results" element={
            <ProtectedRoute>
              <Results/>
            </ProtectedRoute>}
          />
          <Route path="/register" element={<Register/>}/>
        </Routes>        
      </ScreenProvider>
    </div>
  );
}

export default App;