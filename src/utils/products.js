const products = [
    {id: 1, title:'celular Samsung', category:'productos', description:'string', price: 59.999, pictureUrl: 'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/a/2/a23-negro-frente_1.png', stock:'number'},
    {id: 2, title:'celular Motorola', category:'productos', description:'string', price: 48.899, pictureUrl: 'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/4/g41-negro-frente.png', stock:'number'},
    {id: 3, title:'celular Apple', category:'productos', description:'string', price: 108.999, pictureUrl: 'https://i.ebayimg.com/images/g/RuIAAOSw6QNiq4Zv/s-l500.jpg', stock:'number'},
    {id: 4, title:'cargador Samsung', category:'accesorios', description:'string', price: 3.459, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_820054-MLA47573853540_092021-V.jpg', stock:'number'},
    {id: 5, title:'celular Motorola', category:'accesorios', description:'string', price: 2.399, pictureUrl: 'https://aztodo.com/wp-content/uploads/2020/09/Cargador-Motorola-tipo-C-4..jpg', stock:'number'},
    {id: 6, title:'celular Apple', category:'accesorios', description:'string', price: 4.199, pictureUrl: 'https://m.media-amazon.com/images/I/31W4BqX-IxL._SL500_.jpg', stock:'number'}
    ]


    export const getAllProducts = () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                return resolve(products);
            }, 2000)
        })

        return promise
    };

    export const getProduct = (id) => {
        const promise = new Promise((resolve) => {
            const result = products.find((product) => product.id === parseInt(id))
            setTimeout(() => {
                return resolve(result);
            }, 2000)
            
        })

        return promise
    };

    export const getProductsByCategory = (categoryId) => {
        const promise = new Promise((resolve) => {
            const results = products.filter((product) => product.category === categoryId);
            setTimeout(() => {
                return resolve(results);
            }, 2000)
        })

        return promise
    };
