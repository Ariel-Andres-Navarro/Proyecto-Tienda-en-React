import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from './firebaseConfig';

const db = getFirestore(app);

export const getProductById = async (itemId) => {
    try {
        const docRef = doc(db, 'items', itemId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.error("No existe el producto con el ID proporcionado:", itemId);
            return null; 
        }
    } catch (error) {
        console.error("Error obteniendo el producto: ", error);
        return null; 
    }
};

