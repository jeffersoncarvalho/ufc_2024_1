import { collection, query, getDocs, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"

class ProfessorFirebaseService {

    static listar(db, callback) {
        const c = collection(db,"professores")
        //const q = query(c)
        getDocs(c)
        .then(
            (querySnapshot) => {

                const professores = []
                //laço
                querySnapshot.forEach(
                    ( professor ) => {
                        //console.log(professor.id)
                        //console.log(professor.data())
                        professores.push(
                            {
                                id:professor.id,
                                ...professor.data()
                            }
                        ) //professores
                    }
                ) // fim do laço
                callback(professores)
            }
        )
        .catch(error => console.log(error))
    }

    static criar(db, callback, professor) {
        const c = collection(db,"professores")
        addDoc(c,professor)
        .then(
            (professor) => {
                callback({id:professor.id})
            }
        )
        .catch(error => console.log(error))
    }

    static getById(db, callback, id) {
        
        const docRef = doc(db, "professores", id)
        getDoc(docRef)
        .then(
            (docSnap) => {
                //console.log(docSnap.data())
                //const professor = docSnap.data()
                callback(docSnap.data())
            }
        )
        .catch(error => console.log(error))
    }

    static atualizar(db, callback, id, professorAtualizado) {
        const docRef = doc(db,"professores",id)
        setDoc(docRef,professorAtualizado)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }

    static apagar(db, callback, id) {
        const docRef = doc(db, "professores", id)
        deleteDoc(docRef)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }
}

export default ProfessorFirebaseService