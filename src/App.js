import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { ScreenProvider } from "./components/ScreenContext";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import FacesTestIns from "./components/FirstTest/FacesTestIns";
import FacesTestInsTwo from "./components/FirstTest/FacesTestInsTwo";
import FacesTest from "./components/FirstTest/FacesTest";
import EndTest from "./components/FirstTest/EndTest";
import SpanTest from "./components/SecondTest/SpanTest";
import SpanTestIns from "./components/SecondTest/SpanTestIns";
import SpanTestInsTwo from "./components/SecondTest/SpanTestInsTwo";
import SpanTestInsThree from "./components/SecondTest/SpanTestInsThree";
import SpanTestInsFour from "./components/SecondTest/SpanTestInsFour";
import SpanTestInsFive from "./components/SecondTest/SpanTestInsFive";
import SpanTestInsSix from "./components/SecondTest/SpanTestInsSix";
import SpanTestInsSeven from "./components/SecondTest/SpanTestInsSeven";
import SpanTestTwo from "./components/SecondTest/SpanTestTwo";
import SpanTestEnd from "./components/SecondTest/SpanTestEnd";
import Results from "./components/Results";

/* 
Este archivo contiene todas las rutas que componen la aplicación,
permite configurarlas para navegar entre ellas a través de las pantallas
 */
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