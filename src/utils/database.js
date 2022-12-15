import { updateDoc, arrayUnion, doc, setDoc, getDoc } from "firebase/firestore";
import {db} from '../firebase';
   
    // Función que se encarga de guardar los resultados en firebase del test de percepción de diferencias
    export const AddResult = async (idCollection ,valueCollection) => {        

        try {                    
            const userCollection = doc(db, "users", idCollection);

            await updateDoc(userCollection, {
                results: arrayUnion(valueCollection)
            });

          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }    

    // Función que se encarga de crear los usuarios (evaluadores) del test de percepción de diferencias
    export const AddUser = async (email) => {

        try {
            await setDoc(doc(db, "users", email), {results:[]});

        } catch (e) {
            console.error("Error adding user: ", e);
        }

    }

    // Función que trae los datos de los estudiantes que realizaron los respectivos test
    export const getUserResults = async (email, age, database) => {
        let currentDatabase = database ? database == "caras" ? "users" : "users_span" : "users";
        const docRef = doc(db, currentDatabase, email);
        const docSnap = await getDoc(docRef);
        if (docSnap.data() != undefined) {
            let { results } = docSnap.data();
            let answer = results;
            if (age && typeof age == "number") {
                answer = answer.filter(r => r.studentData.age == age);
            }
            return answer;
        }
        return [];
    }

    // Función que se encarga de guardar los resultados en firebase del test de span de imágenes
    export const AddResult2 = async (idCollection ,valueCollection) => {        

        try {                    
            const userCollection = doc(db, "users_span", idCollection);

            await updateDoc(userCollection, {
                results: arrayUnion(valueCollection)
            });

          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }    

    // Función que se encarga de crear los usuarios (evaluadores) del test de span de imágenes
    export const AddUser2 = async (email) => {

        try {
            await setDoc(doc(db, "users_span", email), {results:[]});

        } catch (e) {
            console.error("Error adding user: ", e);
        }

    }