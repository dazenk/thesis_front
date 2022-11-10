import { updateDoc, arrayUnion, doc, setDoc, getDoc } from "firebase/firestore";
import {db} from '../firebase';
   
    export const AddResult = async (idCollection ,valueCollection) => {        

        try {                    
            const userCollection = doc(db, "users", idCollection);

            await updateDoc(userCollection, {
                results: arrayUnion(valueCollection)
            });

            /* console.log("Document written with ID: ", userCollection.id); */
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }    

    export const AddUser = async (email) => {

        try {
            await setDoc(doc(db, "users", email), {results:[]});

        } catch (e) {
            console.error("Error adding user: ", e);
        }

    }

    export const getUserResults = async (email, age, database) => {
        let currentDatabase = database ? database == "caras" ? "users" : "users_span" : "users";
        const docRef = doc(db, currentDatabase, email);
        const docSnap = await getDoc(docRef);
        /* console.log(docSnap.data()) */
        if (docSnap.data() != undefined) {
            let { results } = docSnap.data();
            let answer = results;
            if (age && typeof age == "number") {
                answer = answer.filter(r => r.studentData.age == age);
            }
            return answer;
        }
        /* let { results } = docSnap.data(); */
        /* let answer = results; */
        /* if (age && typeof age == "number") {
            answer = answer.filter(r => r.studentData.age == age);
        } */
        /* return answer; */
        return [];
    }

    export const AddResult2 = async (idCollection ,valueCollection) => {        

        try {                    
            const userCollection = doc(db, "users_span", idCollection);

            await updateDoc(userCollection, {
                results: arrayUnion(valueCollection)
            });

            /* console.log("Document written with ID: ", userCollection.id); */
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }    

    export const AddUser2 = async (email) => {

        try {
            await setDoc(doc(db, "users_span", email), {results:[]});

        } catch (e) {
            console.error("Error adding user: ", e);
        }

    }