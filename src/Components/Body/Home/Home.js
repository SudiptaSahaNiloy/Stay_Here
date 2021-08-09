// type 'rfce' and see the magic
import React from 'react';
import './Stylesheet/Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home_section">
                <Card
                    src="https://images.unsplash.com/photo-1628267374795-cce89ff4b8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1283&q=80"
                    title="Online Experience"
                    description="Unique activities we can do together
                    led by a world of hosts."
                />
                <Card
                    src="https://images.unsplash.com/photo-1627755430008-ca599d57c0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="Unique stays"
                    description="Spaces that are a more than a place to sleep"
                />
                <Card
                    src="https://images.unsplash.com/photo-1627842468152-62f95538037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="Online Experience"
                    description="Comfortable private places, with room for friends 
                    or family."
                />
            </div>

            <div className="home_section">
                <Card
                    src="https://images.unsplash.com/photo-1628267374795-cce89ff4b8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1283&q=80"
                    title="3 Bedroom flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in sunny Bournemouth"
                    price="$350/night"
                />
                <Card
                    src="https://images.unsplash.com/photo-1627755430008-ca599d57c0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="3 Bedroom flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in sunny Bournemouth"
                    price="$350/night"
                />
                <Card
                    src="https://images.unsplash.com/photo-1627842468152-62f95538037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="3 Bedroom flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in sunny Bournemouth"
                    price="$350/night"
                />
            </div>

            
        </div>
    )
}

export default Home;
