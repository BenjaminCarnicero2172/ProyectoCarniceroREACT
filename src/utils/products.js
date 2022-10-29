import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const products = [
    { title:'celular Samsung', category:'productos', description:'4gbRAM, 128gb', price: 59.999, pictureUrl: 'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/a/2/a23-negro-frente_1.png', stock:'10'},
    { title:'celular Motorola', category:'productos', description:'2gbRAM, 64gb', price: 48.899, pictureUrl: 'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/4/g41-negro-frente.png', stock:'10'},
    { title:'celular Apple', category:'productos', description:'4gbRAM, 256gb', price: 108.999, pictureUrl: 'https://i.ebayimg.com/images/g/RuIAAOSw6QNiq4Zv/s-l500.jpg', stock:'10'},
    { title:'cargador Samsung', category:'accesorios', description:'original Samsung', price: 3.459, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_820054-MLA47573853540_092021-V.jpg', stock:'10'},
    { title:'cagador Motorola', category:'accesorios', description:'original Motorola', price: 2.399, pictureUrl: 'https://aztodo.com/wp-content/uploads/2020/09/Cargador-Motorola-tipo-C-4..jpg', stock:'10'},
    { title:'cargador Apple', category:'accesorios', description:'original Apple', price: 4.199, pictureUrl: 'https://m.media-amazon.com/images/I/31W4BqX-IxL._SL500_.jpg', stock:'10'},
    ]


    export const getAllProducts = () => {
        const database = getFirestore ();
        const collectionReference = collection(database, 'items');
        return getDocs(collectionReference)
        .then(snapshot => {
            const list = snapshot
            .docs
            .map((doc) => ({
              id: doc.id,
                ...doc.data()
            })); 
            return list;
    })
    .catch(error => console.warn(error))
    };

    export const getProduct = (id) => {
        const database = getFirestore ();
        const itemrReference = doc(database, 'items', id);
        return getDoc(itemrReference)
        .then(snapshot => {
            if(snapshot.exists()) {
                const item = {
                  id: snapshot.id,
                  ...snapshot.data()
                };
                return item;
            }
        })
    };


    export const getProductsByCategory = (categoryId) => {
        const database = getFirestore ();
        const collectionReference = collection(database, 'items');
        const collectionQuery = query(collectionReference, where('category', '==', categoryId))
        return getDocs(collectionQuery)
        .then(snapshot => {
            if (snapshot.size === 0)
            return [];
            const list = snapshot
            .docs
            .map((doc) => ({
              id: doc.id,
                ...doc.data()
            })); 
            return list;
    })
    .catch(error => console.warn(error))
    };

    export const createAllProducts = async () => {
        try {
            const database = getFirestore();
            
            const collectionReference = collection(database, 'items');
            for (let i = 0; i < products.length; i++) {
                const snapshot = await addDoc(collectionReference, products[i]);

            }

        } catch (error) {
            console.warn(error)
        }
    }