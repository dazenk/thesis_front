import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail  } from "firebase/auth";
import {auth} from "../firebase";
import spanImg from "../img/span_img/img_span";

const ScreenContext = createContext();

const ScreenProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {return signOut(auth)};

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      /* console.log(currentUser); */
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

    const [dataCaras, setDataCaras] = useState(undefined);
    const [dataSpan, setDataSpan] = useState(undefined);

    const [hitCount, setHitCount] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [ici, setIci] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [totalTimeT2, setTotalTimeT2] = useState(180);
    const [userTest, setUserTest] = useState({
      nombre: '',
      edad: '',
    });
    const [userTest2, setUserTest2] = useState({
      nombre: '',
      edad: '',
    });

    const [ageInMonths, setAgeInMonths] = useState(0);
    const [ageNormal, setAgeNormal] = useState(0);

    const [points, setPoints] = useState(0);
    const [processPoints, setProcessPoints] = useState({
      rimse: 0,
      rimsr: 0,
      item: 0
    });

    const linkImage = {
      arcoiris: spanImg[0].img,
      balde: spanImg[1].img,
      calcetin: spanImg[2].img,
      campana: spanImg[3].img,
      chaleco: spanImg[4].img,
      cometa: spanImg[5].img,
      corazon: spanImg[6].img,
      cubo: spanImg[7].img,
      estrella: spanImg[8].img,
      flor: spanImg[9].img,
      globo: spanImg[10].img,
      hoja: spanImg[11].img,
      libro: spanImg[12].img,
      llanta: spanImg[13].img,
      manzana: spanImg[14].img,
      mariquita: spanImg[15].img,
      pastel: spanImg[16].img,
      pato: spanImg[17].img,
      planeta: spanImg[18].img,
      regalo: spanImg[19].img,
      reloj_arena: spanImg[20].img,
      reloj: spanImg[21].img,
      silla: spanImg[22].img,
      sol: spanImg[23].img,
      sombrero: spanImg[24].img,
      tambor: spanImg[25].img,
      taza: spanImg[26].img,
      tenis: spanImg[27].img,
      trebol: spanImg[28].img
    }

    const imgSpan = [
      {
        id: 1,
        img_question: [linkImage.flor],
        img_answer: [linkImage.calcetin, linkImage.flor]
      },
      {
        id: 2,
        img_question: [linkImage.sol],
        img_answer: [linkImage.sol, linkImage.corazon]
      },
      {
        id: 3,
        img_question: [linkImage.globo],
        img_answer: [linkImage.trebol, linkImage.libro, linkImage.globo, linkImage.sol]
      },
      {
        id: 4,
        img_question: [linkImage.hoja],
        img_answer: [linkImage.libro, linkImage.corazon, linkImage.sol, linkImage.pastel, linkImage.hoja]
      },
      {
        id: 5,
        img_question: [linkImage.calcetin, linkImage.manzana],
        img_answer: [linkImage.manzana, linkImage.calcetin]
      },
      {
        id: 6,
        img_question: [linkImage.manzana, linkImage.flor],
        img_answer: [linkImage.flor, linkImage.chaleco, linkImage.balde, linkImage.manzana, linkImage.calcetin]
      },
      {
        id: 7,
        img_question: [linkImage.regalo, linkImage.llanta],
        img_answer: [linkImage.mariquita, linkImage.trebol, linkImage.regalo, linkImage.llanta]
      },
      {
        id: 8,
        img_question: [linkImage.cometa, linkImage.mariquita],
        img_answer: [linkImage.mariquita, linkImage.cometa, linkImage.pato, linkImage.regalo]
      },
      {
        id: 9,
        img_question: [linkImage.trebol, linkImage.cometa],
        img_answer: [linkImage.trebol, linkImage.pato, linkImage.regalo, linkImage.mariquita, linkImage.cometa, linkImage.llanta]
      },
      {
        id: 10,
        img_question: [linkImage.pato, linkImage.regalo],
        img_answer: [linkImage.mariquita, linkImage.regalo, linkImage.trebol, linkImage.llanta, linkImage.cometa, linkImage.pato]
      },
      {
        id: 11,
        img_question: [linkImage.cubo, linkImage.sombrero, linkImage.tambor],
        img_answer: [linkImage.cubo, linkImage.sombrero, linkImage.taza, linkImage.arcoiris, linkImage.tambor]
      },
      {
        id: 12,
        img_question: [linkImage.sombrero, linkImage.silla, linkImage.arcoiris],
        img_answer: [linkImage.campana, linkImage.sombrero, linkImage.tambor, linkImage.arcoiris, linkImage.silla, linkImage.reloj_arena]
      },
      {
        id: 13,
        img_question: [linkImage.tambor, linkImage.arcoiris, linkImage.reloj_arena],
        img_answer: [linkImage.silla, linkImage.taza, linkImage.reloj_arena, linkImage.tambor, linkImage.cubo, linkImage.arcoiris]
      },
      {
        id: 14,
        img_question: [linkImage.campana, linkImage.cubo, linkImage.sombrero],
        img_answer: [linkImage.campana, linkImage.arcoiris, linkImage.tambor, linkImage.silla, linkImage.sombrero, linkImage.cubo]
      },
      {
        id: 15,
        img_question: [linkImage.taza, linkImage.reloj_arena, linkImage.cubo],
        img_answer: [linkImage.sombrero, linkImage.cubo, linkImage.reloj_arena, linkImage.campana, linkImage.tambor, linkImage.taza]
      },
      {
        id: 16,
        img_question: [linkImage.reloj_arena, linkImage.campana, linkImage.silla],
        img_answer: [linkImage.cubo, linkImage.reloj_arena, linkImage.silla, linkImage.sombrero, linkImage.arcoiris, linkImage.taza, linkImage.tambor, linkImage.campana]
      },
      {
        id: 17,
        img_question: [linkImage.planeta, linkImage.tenis, linkImage.reloj, linkImage.estrella],
        img_answer: [linkImage.planeta, linkImage.libro, linkImage.tenis, linkImage.llanta, linkImage.reloj, linkImage.estrella]
      },
      {
        id: 18,
        img_question: [linkImage.reloj_arena, linkImage.cometa, linkImage.cubo, linkImage.corazon],
        img_answer: [linkImage.reloj, linkImage.reloj_arena, linkImage.cometa, linkImage.corazon, linkImage.llanta, linkImage.cubo]
      },
      {
        id: 19,
        img_question: [linkImage.estrella, linkImage.libro, linkImage.reloj_arena, linkImage.tenis],
        img_answer: [linkImage.cometa, linkImage.libro, linkImage.corazon, linkImage.reloj_arena, linkImage.cubo, linkImage.tenis, linkImage.estrella, linkImage.planeta]
      },
      {
        id: 20,
        img_question: [linkImage.cometa, linkImage.llanta, linkImage.planeta, linkImage.cubo],
        img_answer: [linkImage.cubo, linkImage.planeta, linkImage.estrella, linkImage.llanta, linkImage.libro, linkImage.reloj, linkImage.cometa, linkImage.tenis]
      },
      {
        id: 21,
        img_question: [linkImage.libro, linkImage.corazon, linkImage.llanta, linkImage.reloj],
        img_answer: [linkImage.estrella, linkImage.corazon, linkImage.libro, linkImage.tenis, linkImage.cubo, linkImage.planeta, linkImage.reloj_arena, linkImage.reloj, linkImage.llanta, linkImage.cometa]
      },
      {
        id: 22,
        img_question: [linkImage.cubo, linkImage.planeta, linkImage.cometa, linkImage.reloj_arena],
        img_answer: [linkImage.cometa, linkImage.tenis, linkImage.estrella, linkImage.cubo, linkImage.reloj, linkImage.corazon, linkImage.planeta, linkImage.libro, linkImage.reloj_arena, linkImage.llanta]
      },
      {
        id: 23,
        img_question: [linkImage.sol, linkImage.tambor, linkImage.arcoiris, linkImage.mariquita, linkImage.reloj],
        img_answer: [linkImage.reloj, linkImage.mariquita, linkImage.trebol, linkImage.planeta, linkImage.sol, linkImage.tambor, linkImage.libro, linkImage.arcoiris]
      },
      {
        id: 24,
        img_question: [linkImage.globo, linkImage.trebol, linkImage.libro, linkImage.planeta, linkImage.taza],
        img_answer: [linkImage.sol, linkImage.libro, linkImage.planeta, linkImage.tambor, linkImage.globo, linkImage.arcoiris, linkImage.trebol, linkImage.taza]
      },      
      {
        id: 25,
        img_question: [linkImage.tambor, linkImage.taza, linkImage.mariquita, linkImage.trebol, linkImage.arcoiris],
        img_answer: [linkImage.globo, linkImage.taza, linkImage.planeta, linkImage.arcoiris, linkImage.libro, linkImage.tambor, linkImage.reloj, linkImage.trebol, linkImage.mariquita, linkImage.sol]
      },      
      {
        id: 26,
        img_question: [linkImage.estrella, linkImage.campana, linkImage.arcoiris, linkImage.silla, linkImage.pastel, linkImage.regalo],
        img_answer: [linkImage.estrella, linkImage.hoja, linkImage.campana, linkImage.tenis, linkImage.regalo, linkImage.arcoiris, linkImage.pato, linkImage.silla, linkImage.llanta, linkImage.sombrero, linkImage.pastel, linkImage.reloj]
      },      
      {
        id: 27,
        img_question: [linkImage.hoja, linkImage.llanta, linkImage.sombrero, linkImage.reloj, linkImage.tenis, linkImage.pato],
        img_answer: [linkImage.arcoiris, linkImage.llanta, linkImage.estrella, linkImage.pato, linkImage.pastel, linkImage.silla, linkImage.campana, linkImage.sombrero, linkImage.reloj, linkImage.tenis, linkImage.regalo, linkImage.hoja]
      },      
      {
        id: 28,
        img_question: [linkImage.arcoiris, linkImage.regalo, linkImage.pastel, linkImage.sombrero, linkImage.tenis, linkImage.campana, linkImage.hoja],
        img_answer: [linkImage.silla, linkImage.regalo, linkImage.tenis, linkImage.reloj, linkImage.campana, linkImage.llanta, linkImage.sombrero, linkImage.arcoiris, linkImage.estrella, linkImage.hoja, linkImage.pato, linkImage.pastel]
      },
      {
        id: 29,
        img_question: [linkImage.silla, linkImage.hoja, linkImage.arcoiris, linkImage.pato, linkImage.sombrero, linkImage.regalo, linkImage.estrella, linkImage.pastel],
        img_answer: [linkImage.hoja, linkImage.pastel, linkImage.pato, linkImage.regalo, linkImage.campana, linkImage.sombrero, linkImage.silla, linkImage.tenis, linkImage.estrella, linkImage.llanta, linkImage.arcoiris, linkImage.reloj]
      },
      {
        id: 30,
        img_question: [],
        img_answer: []
      }
    ];

    const data1 = {
        signup,
        login,
        user,
        logout,        
        loading,
        loginWithGoogle,
        resetPassword,
        userTest,
        setUserTest,
        userTest2,
        setUserTest2,
        hitCount,
        setHitCount,
        errorCount,
        setErrorCount,
        totalCount,
        setTotalCount,
        ici,
        setIci,
        totalTimeT2,
        setTotalTimeT2,
        imgSpan,
        points,
        setPoints,
        ageInMonths,
        setAgeInMonths,
        ageNormal,
        setAgeNormal,
        processPoints,
        setProcessPoints,
        dataCaras,
        setDataCaras,
        dataSpan,
        setDataSpan
    };

    return <ScreenContext.Provider
        value={data1}
        >
            {children}
        </ScreenContext.Provider>
};

export {ScreenProvider};
export default ScreenContext;