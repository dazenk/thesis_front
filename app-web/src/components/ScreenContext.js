import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail  } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {auth} from "../firebase";

const ScreenContext = createContext();

const ScreenProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

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
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  /* useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'img-face');
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(img => ({id: img.id, ...img.data()}))));        
  }, []); */


    const [correctTree, setCorrectTree] = useState([]);
    const [wrongTree1, setWrongTree1] = useState([]);
    const [wrongTree2, setWrongTree2] = useState([]);
    const [wrongTree3, setWrongTree3] = useState([]);
    const [wrongTree4, setWrongTree4] = useState([]);
    const [wrongTree5, setWrongTree5] = useState([]);
    const [wrongTree6, setWrongTree6] = useState([]);
    const [wrongTree7, setWrongTree7] = useState([]);
    const [wrongTree8, setWrongTree8] = useState([]);
    const [wrongTree9, setWrongTree9] = useState([]);
    const [corrects, setCorrects] = useState(0);
    const [commission, setCommission] = useState(0);
    const [inaccuracies, setInaccuracies] = useState(0);
    const [omission, setOmission] = useState(112);
    const [total, setTotal] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [stopTimer, setStopTimer] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

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

    const [answerCorrect, setAnswerCorrect] = useState(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']);
    const [answerCorrect2, setAnswerCorrect2] = useState(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']);
    const [answerCorrect3, setAnswerCorrect3] = useState(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']);
    const [answerCorrect4, setAnswerCorrect4] = useState(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']);
    const [answerCorrect5, setAnswerCorrect5] = useState(['empty', 'empty', 'empty', 'empty', 'empty']);
    const [timeTest, setTimeTest] = useState(120);

    let interval;
    let globalArray = [];
    let totalNumbers = 44;
    let maxNumbers = 144;
    let remove = 0;
    let index = 0;

    const fillRandom = (array) => {
        let r = Math.floor(Math.random() * maxNumbers);
        if (!array.some(function(e){return e === r})) {
          array.push(r);
        }
    };

    const fillArray = (tree, quantity, remove, index) => {
        for (let i = 0; i < quantity; i++) {      
          remove = globalArray[Math.floor(Math.random() * globalArray.length)];
          index = globalArray.indexOf(remove);
          tree.push(remove);
          globalArray.splice(index, 1);
        }
        return tree;
    };

    const onClickButton = () => {
        while (globalArray.length < totalNumbers && totalNumbers < maxNumbers) {            
            fillRandom(globalArray);
        }
        setCorrectTree(fillArray(correctTree, 14, remove, index));
        setWrongTree1(fillArray(wrongTree1, 3, remove, index));
        setWrongTree2(fillArray(wrongTree2, 3, remove, index));
        setWrongTree3(fillArray(wrongTree3, 4, remove, index));
        setWrongTree4(fillArray(wrongTree4, 4, remove, index));
        setWrongTree5(fillArray(wrongTree5, 2, remove, index));
        setWrongTree6(fillArray(wrongTree6, 3, remove, index));
        setWrongTree7(fillArray(wrongTree7, 4, remove, index));
        setWrongTree8(fillArray(wrongTree8, 3, remove, index));
        setWrongTree9(fillArray(wrongTree9, 4, remove, index));
    };

    const linkImage = {
      arcoiris: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/arcoiris.png?alt=media&token=53771c44-c760-48aa-8771-5c4a45f8bed7',
      balde: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/balde.png?alt=media&token=c444f117-3310-4eda-a71e-278d3e9fe1d1',
      calcetin: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/calcetines.png?alt=media&token=ffae029e-47e7-4bf8-abdd-0d422b874120',
      campana: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/campana.png?alt=media&token=5646f5b9-1246-416a-a193-f6f7ae102c3e',
      chaleco: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/chaleco.png?alt=media&token=655b3914-6aa4-4ff8-9e5c-deb0bcba83ff',
      cometa: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/cometa.png?alt=media&token=bd86e778-c956-4901-aec5-620ab04c292f',
      corazon: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/corazon.png?alt=media&token=4de7b666-eefb-4182-86c1-8a6c5d42bbe2',
      cubo: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/cubo.png?alt=media&token=57563c38-4069-4918-b085-f491b8012034',
      estrella: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/estrella.png?alt=media&token=94c19f80-108b-4276-9b4f-e03b3d0aa99a',
      flor: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/flor.png?alt=media&token=ceafe308-7387-45fd-971a-b2c52d5b47d5',
      globo: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/globo.png?alt=media&token=89e15aac-7353-4ad5-b550-dc8958d515f2',
      hoja: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/hoja.png?alt=media&token=88b554bf-c0a9-4f27-be3b-9a1be7608f9a',
      libro: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/libro.png?alt=media&token=0f67ad3d-56f8-498a-b786-3453fe110684',
      llanta: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/llanta.png?alt=media&token=3e2e965f-d97c-47a1-9138-40101b185550',
      manzana: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/manzana.png?alt=media&token=9a810a1a-4ff2-4004-af66-44eac464b765',
      mariquita: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/mariquita.png?alt=media&token=4241fa0a-c104-4a96-9f59-24a6da5ded7e',
      pastel: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/pastel.png?alt=media&token=5b3e1017-98b3-41b8-8cf0-aacaca474237',
      pato: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/pato.png?alt=media&token=e75ba281-0ebd-4898-8d73-5775fb815fbc',
      planeta: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/planeta.png?alt=media&token=c1a85fa3-c81a-49ca-af77-eb6dc448c9d5',
      regalo: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/regalo.png?alt=media&token=f168ece1-1423-477d-9ee0-94bc6027f205',
      reloj_arena: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/reloj_arena.png?alt=media&token=ff86f5b1-8286-4d44-bbc2-75289cb1c50e',
      reloj: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/reloj.png?alt=media&token=1568a8e4-b796-4fa6-98f0-6cbced1a9ebd',
      silla: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/silla.png?alt=media&token=206e7dcd-51eb-4dc1-b33b-73ab09dffe30',
      sol: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/sol.png?alt=media&token=7e9d3616-5537-4b13-8505-54e3901e5de1',
      sombrero: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/sombrero.png?alt=media&token=df452b49-1f4b-40af-aee2-7f6771d4deec',
      tambor: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/tambor.png?alt=media&token=5b5e824a-4457-418e-9232-a3332b162213',
      taza: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/taza.png?alt=media&token=f14c0431-95be-46bd-8c27-21dcf83ad5f0',
      tenis: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/tenis.png?alt=media&token=1a3e873f-b82a-493f-9682-266e393bd98c',
      trebol: 'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/trebol.png?alt=media&token=6fd0b93a-6f7d-4f4b-aa9f-2e95dd525de6'
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
        correctTree,
        setCorrectTree,
        wrongTree1,
        setWrongTree1,
        wrongTree2,
        setWrongTree2,
        wrongTree3,
        setWrongTree3,
        wrongTree4,
        setWrongTree4,
        wrongTree5,
        setWrongTree5,
        wrongTree6,
        setWrongTree6,
        wrongTree7,
        setWrongTree7,
        wrongTree8,
        setWrongTree8,
        wrongTree9,
        setWrongTree9,
        onClickButton,
        corrects,
        setCorrects,
        commission,
        setCommission,
        inaccuracies,
        setInaccuracies,
        omission,
        setOmission,
        total,
        setTotal,
        totalTime,
        setTotalTime,
        stopTimer,
        setStopTimer,
        interval,
        currentPage,
        setCurrentPage,
        hitCount,
        setHitCount,
        errorCount,
        setErrorCount,
        totalCount,
        setTotalCount,
        ici,
        setIci,
        answerCorrect,
        setAnswerCorrect,
        answerCorrect2,
        setAnswerCorrect2,
        answerCorrect3,
        setAnswerCorrect3,
        answerCorrect4,
        setAnswerCorrect4,
        answerCorrect5,
        setAnswerCorrect5,
        timeTest,
        setTimeTest,
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
        setProcessPoints
    };

    return <ScreenContext.Provider
        value={data1}
        >
            {children}
        </ScreenContext.Provider>
};

export {ScreenProvider};
export default ScreenContext;