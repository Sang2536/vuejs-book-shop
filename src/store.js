import { createStore } from "vuex";

const store = createStore({
    /*  state   =>  contains all data (nơi chứa toàn bộ dữ liệu của ứng dụng)   */
    state:  {
        //  from data
        dataFormLogin: { email: '', password: '' },
        dataFormSearchProduct: { },

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

        // transactions
        transactionByUser: null,

        //  news & articles
        articles: null,
        latestArticle: null,
        mostReadArticles: null,

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

        dataFormSearchProduct(state) {
            return state.dataFormSearchProduct;
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
        submitFormLogin({ dispatch }) {
            if(this.state.dataFormLogin.email === '' && this.state.dataFormLogin.password === '') {
                alert('Vui lòng nhập đầy đủ thông tin Email và Password')
            } else {
                console.log(this.state.dataFormLogin);

                dispatch('fetchLogin');

                // window.location="http://localhost:8080/home";
            }
        },

        async fetchLogin({ commit }) {
            try {
                const res = await fetch('http://localhost:3000/login');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

                const data = await res.json();

                console.log(data[0].user);

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
                const res = await fetch('http://localhost:3000/tags');

                if (!res.ok) {
                    throw new Error('Something went wong.');
                }

                const data = await res.json();

                console.log(data);

                commit('setTags', data);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchCategoryAll({ commit }) {
            try {
                const res = await fetch('http://localhost:3000/categories');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

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
                const res = await fetch('http://localhost:3000/product');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

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

        async fetchTransactionByUser({ commit, state }) {
            if(state.isLogin) {
                try {
                    const res = await fetch('http://localhost:3000/transactions');
    
                    if(!res.ok) {
                        throw new Error('Something went wrong.');
                    }
    
                    const data = await res.json();
    
                    commit('setTransactionByUser', data);
                } catch (error) {
                    console.log(error);
                }
            } else {
                commit('setTransactionByUser', null);
            }
        },

        async fetchArticles({ commit, dispatch }) {
            try {
                const res = await fetch('http://localhost:3000/articles');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

                const data = await res.json();

                commit('setArticles', data);

                dispatch('pagination', { data: data, lengSplice: 14, currentIndex: 1 });
            } catch (error) {
                console.log(error);
            }
        },

        async fetchLatestArticle({ commit }) {
            try {
                const res = await fetch('http://localhost:3000/latest-article');

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
                const res = await fetch('http://localhost:3000/most-read-articles');

                if(!res.ok) {
                    throw new Error('Something went wrong.');
                }

                const data = await res.json();

                commit('setMostReadArticles', data);
            } catch (error) {
                console.log(error);
            }
        },

        searchProduct() {
            console.log('searchProduct');
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

            commit('setAmountDataDisplayed', lengSplice);
            commit('setTotalPagination', totalPage);
            commit('setArticlesByPagination', articlesByPage);
        },

        handleClickPagination({ commit, dispatch, state }, index) {
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

        buttonShowTransaction() {

        },

        
    }
});

export default store;