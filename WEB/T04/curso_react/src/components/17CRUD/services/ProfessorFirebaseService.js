import { collection, query, getDocs, addDoc } from "firebase/firestore"

class ProfessorFirebaseService {

    static listar(db, callback) {
        const c = collection(db,"professores")
        const q = query(c)
        getDocs(q)
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
}

export default ProfessorFirebaseService