import { createStore } from "vuex";
import helper from "./helper";

const CART_STORAGE_KEY = "SHOPPING_CART";
// const FAVORITE_STORAGE_KEY = "FAVORITE_KEY";

const store = createStore({
    /*  state   =>  contains all data (nơi chứa toàn bộ dữ liệu của ứng dụng)   */
    state:  {
        //  from data
        dataFormLogin: { email: '', password: '' },
        dataFormRegister: { email: '', name: '', password: '', verifyPassword: '' },
        dataFormSearchProduct: { },
        msgErrorForm: null,

        //  verify data
        isLogin: false,
        userLogin: null,

        //  tag
        tags: null,

        //  category data
        categoryAll: null,
        categoryBook: null,
        categoryAccessory: null,

        //  product data
        productAll: null,
        productBook: null,
        productAccessory: null,
        productSearch: null,
        productDetail: null,

        //  cart
        productInCart: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)),

        // transactions
        transactionByUser: null,

        //  news & articles
        articles: null,
        latestArticle: null,
        mostReadArticles: null,
        articleDetail: null,

        //  favorite
        itemProductFavorites: [],
        itemArticleFavorites: [],

        // pagination
        totalPagination: [],
        currentIndexPagination: 1,
        articlesByPagination: null,
    },

    /*  getter  =>  computed properties (khi nhiều hơn một nơi cần dùng)    */
    getters: {
        dataFormLogin(state) {
            return state.dataFormLogin;
        },

        dataFormRegister(state) {
            return state.dataFormRegister;
        },

        dataFormSearchProduct(state) {
            return state.dataFormSearchProduct;
        },

        msgErrorForm(state) {
            return state.msgErrorForm;
        },

        isLogin(state) {
            return state.isLogin;
        },

        userLogin(state) {
            return state.userLogin;
        },

        tags(state) {
            return state.tags;
        },

        categoryAll(state) {
            return state.categoryAll;
        },

        categoryBook(state) {
            return state.categoryBook;
        },

        categoryAccessory(state) {
            return state.categoryAccessory;
        },

        productAll(state) {
            return state.productAll;
        },

        productBook(state) {
            return state.productBook;
        },

        productAccessory(state) {
            return state.productAccessory;
        },

        productSearch(state) {
            return state.productSearch;
        },

        productDetail(state) {
            return state.productDetail;
        },

        productInCart(state) {
            return state.productInCart;
        },

        totalAmountInCart(state) {
            var totalAmount = 0;
            const productList = [...state.productInCart];

            productList.map(item => {
                console.log(item.price, item.quantity);

                // eslint-disable-next-line no-const-assign
                totalAmount += item.price * item.quantity;
            })

            return totalAmount;
        },

        transactionByUser(state) {
            return state.transactionByUser;
        },

        articles(state) {
            return state.articles;
        },

        latestArticle(state) {
            return state.latestArticle;
        },

        mostReadArticles(state) {
            return state.mostReadArticles;
        },

        articleDetail(state) {
            return state.articleDetail;
        },

        itemProductFavorites(state) {
            return state.itemProductFavorites;
        },

        itemArticleFavorites(state) {
            return state.itemArticleFavorites;
        },

        totalPagination(state) {
            return state.totalPagination;
        },

        currentIndexPagination(state) {
            return state.currentIndexPagination;
        },

        articlesByPagination(state) {
            return state.articlesByPagination;
        }
    },

    /*  mutation => actually change state (thực hiện thay đổi state)    */
    mutations: {
        setMsgErrorForm(state, msgErrorFormPayload) {
            state.msgErrorForm = msgErrorFormPayload;
        },

        setIsLogin(state, isLoginPayload) {
            state.isLogin = isLoginPayload;
        },
        
        setUserLogin(state, userLoginPayload) {
            state.userLogin = userLoginPayload;
        },

        setTags(state, tagsPayload) {
            state.tags = tagsPayload;
        },

        setCategoryAll(state, categoryAllPayload) {
            state.categoryAll = categoryAllPayload;
        },

        setCategoryBook(state, categoryBookPayload) {
            state.categoryBook = categoryBookPayload;
        },

        setCategoryAccessory(state, categoryAccessoryPayload) {
            state.categoryAccessory = categoryAccessoryPayload;
        },

        setProductAll(state, productAllPayoad) {
            state.productAll = productAllPayoad;
        },

        setProductBook(state, productBookPayload) {
            state.productBook = productBookPayload;
        },

        setProductAccessory(state, productAccessoryPayload) {
            state.productAccessory = productAccessoryPayload;
        },

        setProductDetail(state, productDetailPayload) {
            state.productDetail = productDetailPayload;
        },

        setProductInCart(state, productInCartPayload) {
            state.productInCart = productInCartPayload;

            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.productInCart));
        },

        setTotalAmountInCart(state, totalAmountInCartPayload) {
            state.totalAmountInCart = totalAmountInCartPayload;
        },

        setProductSearch(state, productSearchPayload) {
            state.productSearch = productSearchPayload;
        },

        setTransactionByUser(state, transactionByUserPayload) {
            state.transactionByUser = transactionByUserPayload;
        },

        setArticles(state, articlesPayload) {
            state.articles = articlesPayload;
        },

        setLatestArticle(state, latestArticlePayload) {
            state.latestArticle = latestArticlePayload;
        },

        setMostReadArticles(state, mostReadArticlesPayload) {
            state.mostReadArticles = mostReadArticlesPayload;
        },

        setArticleDetail(state, articleDetailPayload) {
            state.articleDetail = articleDetailPayload;
        },

        setItemProductFavorites(state, itemProductFavoritesPayload) {
            state.itemProductFavorites = itemProductFavoritesPayload;
        },

        setItemArticleFavorites(state, itemArticleFavoritesPayload) {
            state.itemArticleFavorites = itemArticleFavoritesPayload;
        },

        setTotalPagination(state, totalPaginationPayload) {
            state.totalPagination = totalPaginationPayload;
        },

        setCurrentIndexPagination(state, currentIndexPaginationPayload) {
            state.currentIndexPagination = currentIndexPaginationPayload;
        },

        setArticlesByPagination(state, articlesByPaginationPayload) {
            state.articlesByPagination = articlesByPaginationPayload;
        }
    },

    /*  action  =>   commit mutations (thực hiện mutations) */
    actions: {
        registerUser ({ dispatch, commit, state }) {
            const dataForm = state.dataFormRegister;
            const msgError = [];

            if (dataForm.email === '' || dataForm.name === '' || dataForm.password === '' || dataForm.verifyPassword === '') {
                msgError.push('There is an empty input in the form');
            } else if((dataForm.password !== dataForm.verifyPassword)) {
                msgError.push('Password and Verification password are not the same');
            }

            if (msgError.length) {
                commit('setMsgErrorForm', msgError);
            } else {
                dispatch('fetchRegister', dataForm);
            }
        },

        // eslint-disable-next-line no-empty-pattern
        async fetchRegister({}, input) {
            try {
                //  lỗi k đúng data input trong db.json
                const res = await helper.fetchPost('http://localhost:3000/users', input);

                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                return data;
            } catch (error) {
                console.log(error);
            }
        },

        submitFormLogin({ dispatch, commit, state }) {
            const dataForm = state.dataFormLogin;
            const msgError = [];

            if (dataForm.email === '' || dataForm.password === '') {
                msgError.push('There is an empty input in the form');
            }

            if (msgError.length) {
                commit('setMsgErrorForm', msgError);
            } else {
                dispatch('fetchLogin');
            }
        },

        async fetchLogin({ commit }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/login');

                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                commit('setIsLogin', true);
                commit('setUserLogin', data[0].user);
            } catch (error) {
                console.log(error);
            }
        },

        logout({ commit }) {
            if(this.state.isLogin == true) {
                commit('setIsLogin', false);
                commit('setUserLogin', null);
            }
        },

        async fetchTags({ commit }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/tags');
                
                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                commit('setTags', data);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchCategoryAll({ commit }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/categories');
                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                commit('setCategoryAll', data);

                const categoryBook = [];
                const categoryAccessory = [];
                if(data) {
                    data.forEach(item => {
                        if(item.parent_id === 1) {
                            categoryBook.push(item);
                        } else if(item.parent_id === 2) {
                            categoryAccessory.push(item);
                        }
                    });
                }

                commit('setCategoryBook', categoryBook);
                commit('setCategoryAccessory', categoryAccessory);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchProductAll({ commit }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/product');

                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                commit('setProductAll', data);

                const productBook = [];
                const productAccessory = [];
                if(data) {
                    data.forEach(item => {
                        if(item.type === "book") {
                            productBook.push(item);
                        } else if(item.type === "accessory") {
                            productAccessory.push(item);
                        }
                    });
                }

                commit('setProductBook', productBook);
                commit('setProductAccessory', productAccessory);
            } catch (error) {
                console.log(error);
            }
        },

        searchProduct() {
            console.log('searchProduct');
        },

        async fetchProductDetail({ commit }, input) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/product/' + input.id);

                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                commit('setProductDetail', data);
            } catch (error) {
                console.log(error);
            }
        },

        addProductToCart({ commit, state }, id) {
            if(state.isLogin === true) {
                const productList = [...state.productInCart];

                //  get product
                state.productAll.forEach(item => {
                    if(item.id === id) {
                        productList.push({
                            "id": item.id,
                            "sku": item.sku,
                            "name": item.name,
                            "price": item.price,
                            "type": item.type,
                            "quantity": 1,
                        });
                    }
                });

                commit('setProductInCart', productList);

                alert('Product has been added to the cart')
            } else {
                alert('You are not logged in. Please log in to use this feature');
            }
        },

        removeProductFromCart({ commit, state }, id) {
            const productList = [...state.productInCart];
            // var totalAmount = state.totalAmountInCart;

            productList.forEach((item, index) => {
                if(item.id === id) {
                    productList.splice(index, 1);
                }
            });

            commit('setProductInCart', productList);
        },

        changeQuantityInCart({ commit, state }, input) {
            if(state.isLogin === true) {
                const productList = [...state.productInCart];

                //  get product
                productList.forEach((item, index) => {
                    if(item.id === input.id && input.type === "plus") {
                        productList[index].quantity = item.quantity + 1;
                    } else if (item.id === input.id && input.type === "minus") {
                        productList[index].quantity = item.quantity - 1;
                    }
                });

                commit('setProductInCart', productList);
            } else {
                alert('You are not logged in. Please log in to use this feature');
            }
        },

        async fetchTransactionByUser({ commit, state }) {
            try {
                if(state.isLogin) {
                    const res = await helper.fetchGet('http://localhost:3000/transactions');

                    if(!res.ok) throw new Error('Something went wrong.');

                    const data = await res.json();
        
                    commit('setTransactionByUser', data);
                } else {
                    commit('setTransactionByUser', null);
                }
            } catch (error) {
                console.log(error);
            }
        },

        async fetchArticles({ commit, dispatch }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/articles');

                if(!res.ok) throw new Error('Something went wrong.');

                const data = await res.json();

                commit('setArticles', data);
                dispatch('pagination', { data: data, lengSplice: 14, currentIndex: 1 });
            } catch (error) {
                console.log(error);
            }
        },

        async fetchLatestArticle({ commit }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/latest-article');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

                const data = await res.json();

                commit('setLatestArticle', data);
            } catch (error) {
                console.log(error);
            }
        },
        
        async fetchMostReadArticles({ commit }) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/most-read-articles');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

                const data = await res.json();

                commit('setMostReadArticles', data);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchArticleDetail({ commit }, input) {
            try {
                const res = await helper.fetchGet('http://localhost:3000/articles/' + input.id);

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

                const data = await res.json();

                commit('setArticleDetail', data);
            } catch (error) {
                console.log(error);
            }
        },

        addItemToFavorite({ state, commit }, input) {
            if(state.isLogin === true && input.type === 'product') {
                const productList = [...state.itemProductFavorites];

                state.productAll.forEach(item => {
                    if(item.id === input.id) {
                        productList.push(item);
                    }
                });

                commit('setItemProductFavorites', productList);

                alert('Product has been added to the favorite');
            } else if (state.isLogin === true && input.type === 'article') {
                const articleList = [...state.itemArticleFavorites];

                state.articles.forEach(item => {
                    if(item.id === input.id) {
                        articleList.push(item);
                    }
                });

                commit('setItemArticleFavorites', articleList);

                alert('Artcle has been added to the favorite');
            } else {
                alert('You are not logged in. Please log in to use this feature.');
            }
        },

        removeItemFromFavorite({ state, commit }, input) {
            if(state.isLogin === true && input.type === 'product') {
                const productList = [...state.itemProductFavorites];

                productList.forEach((item, index) => {
                    if(item.id === input.id) {
                        productList.splice(index, 1);
                    }
                });

                commit('setItemProductFavorites', productList);
            } else if (state.isLogin === true && input.type === 'article') {
                const articleList = [...state.itemArticleFavorites];

                articleList.forEach((item, index) => {
                    if(item.id === input.id) {
                        articleList.splice(index, 1);
                    }
                });

                commit('setItemArticleFavorites', articleList);
            } else {
                alert('You are not logged in. Please log in to use this feature.');
            }
        },

        copyLinkToProduct(id) {
            console.log(id);
        },

        async addTransaction({ commit, state }) {
            const input = {
                "id": 11111, 
                "user_id": state.userLogin.id,
                "transaction_date": new Date(),
                "transaction_amount": state.totalAmountInCart,
                "product": state.productInCart
            };

            console.log(input);

            // const res = await helper.fetchPost('http://localhost:3000/transactions', input);

            // if(!res.ok) throw new Error('Something went wrong.');

            // const data = await res.json();

            commit('setProductInCart', [])
        },

        showTransaction() {
            console.log('buttonShowTransaction');
        },

        async destroyTransaction({ commit }, input) {
            const res = await helper.fetchDelete('http://localhost:3000/transactions/' + input.id);

            if(!res.ok) throw new Error('Something went wrong.');

            const data = await res.json();

            console.log(data);

            commit('setTransactionByUser', data);
        },

        pagination({ commit }, input) {
            const data = input.data, 
                lengSplice = input.lengSplice,
                indexPage = input.currentIndex;
            const indexBegin = (indexPage - 1) * lengSplice;
            const indexEnd = indexPage * lengSplice;
            const articlesByPage = data.slice(indexBegin, indexEnd);

            const totalPage = [];
            for (let i = 0; i < Math.ceil(data.length/lengSplice); i++) {
                totalPage.push(i + 1);
            }

            commit('setTotalPagination', totalPage);
            commit('setArticlesByPagination', articlesByPage);
        },

        handleClickNumberPage({ commit, dispatch, state }, index) {
            commit('setCurrentIndexPagination', index);

            dispatch('pagination', { data: state.articles, lengSplice: 14, currentIndex: state.currentIndexPagination });
        },

        handleClickPrevPage({ commit, dispatch, state }) {
            if(state.currentIndexPagination > 1 && state.currentIndexPagination <= state.totalPagination.length) {
                commit('setCurrentIndexPagination', (state.currentIndexPagination - 1));

                dispatch('pagination', { data: state.articles, lengSplice: 14, currentIndex: state.currentIndexPagination });
            }
        },

        handleClickNextPage({ commit, dispatch, state }) {
            if(state.currentIndexPagination >= 1 && state.currentIndexPagination < state.totalPagination.length) {
                commit('setCurrentIndexPagination', (state.currentIndexPagination + 1));

                dispatch('pagination', { data: state.articles, lengSplice: 14, currentIndex: state.currentIndexPagination });
            }
        },
    }
});

export default store;