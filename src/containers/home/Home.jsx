import React from 'react';
import Header from '../../components/header/Header';
import PostList from '../../components/postList/PostList';
import AdExample from '../../components/adExample/AdExample';

import './home.scss';

const Home = () => {

    return (
        <div>
            <Header />
            <div className="container__main">
                <AdExample />
                <PostList />
                <AdExample />
            </div>
        </div>
    )
}

export default Home;