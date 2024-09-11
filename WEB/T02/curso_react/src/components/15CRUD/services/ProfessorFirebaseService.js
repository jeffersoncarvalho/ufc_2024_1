import {collection, getDocs, addDoc } from "firebase/firestore"

class ProfessorFirebaseService {

    static listar(db, callback) {
        const c = collection(db, "professores")
        getDocs(c)
        .then(
            (snapshot) => {
                const professores = []
                snapshot.forEach(
                    ( document ) => {
                        console.log(document.id)
                        console.log(document.data())
                        professores.push(
                            {
                                id:document.id,
                                ...document.data()
                            }
                        )
                    }
                )//for each
                callback(professores)
            }
        )
        .catch(error=>console.log(error))
    }

    static criar(db, professor, callback) {
        const c = collection(db, "professores")
        addDoc(c,professor)
        .then(
            (document) => {
                callback({id:document.id})
            }
        )
        .catch(error => console.log(error))

    }
}

export default ProfessorFirebaseService