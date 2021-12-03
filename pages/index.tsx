import { useEffect, useState } from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import { User } from '../models/user.model';
import axios from 'axios';
import styles from '../styles/Home.module.scss';
import userService from '../services/user.service';

const Home: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const getUserList = async () => {
            const data = await userService.getUsers();
            console.log(data);
            setUsers(data);
        };
        getUserList();
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Facebook login example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>{users && users.map((i) => <p>{i.name}</p>)}</main>
        </div>
    );
};

export default Home;
