import { useLazyQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CREATE } from '../../graphql/mutations';
import { LOGIN } from '../../graphql/queries';
import styles from '../../styles/Login.module.scss';
import { Button } from '../button';
import { Input } from '../input';

type QueryParams = {
    type?: 'create' | 'login';
    username?: string;
    redirect_uri?: string;
}
export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { type='login', redirect_uri='/' } = router.query as QueryParams;
    const isLogin = type === 'login';

    const [_login] = useLazyQuery(LOGIN);
    const [_create] = useMutation(CREATE);

    const login = async () => {
        // Returning if username or password is empty
        if(!username || !password) return;

        // Making request to login
        const { data, error } = await  _login({ variables: {
            username,
            password
        } });

        // If there were errors with login
        if(error) return console.log(error);

        // Setting token in localStorage
        window.localStorage.token = data.login.token;
        window.location.href = redirect_uri;
    }
    const create = async () => {
        // Returning if username or password is empty
        if(!username || !password) return;

        // Making request to create user
        try {
            const { errors } = await _create({ variables: {
                username,
                password
            } })
        } catch(error) {
            console.log(error);
            return;
        }

        // Making request to login
        const { data, error } = await  _login({ variables: {
            username,
            password
        } });

        // Setting token in localStorage
        window.localStorage.token = data.login.token;
        window.location.href = redirect_uri;
    }

    const swap = () => {
        const newType = isLogin ? 'create' : 'login';
        let path = `/login?type=${newType}`;
        if(redirect_uri) {
            path += `&redirect_uri=${redirect_uri}`;
        }

        router.push(path);
    }

    const title = isLogin ? (
        'Login to Account'
    ) : (
        'Create Account'
    )
    const footer = isLogin ? (
        'Don\'t have an account?'
    ) : (
        'Already have an account?'
    )
    return(
        <div className={styles['container']}>
            <div className={styles['content']}>
                <h1>
                    {title}
                </h1>
                <Input 
                    placeholder={'Username'}
                    label={'Username'}
                    name={'username'}
                    focusOnMount={true}
                    onChange={setUsername}
                    containerClassName={styles['input']}
                />
                <Input 
                    placeholder={'Password...'}
                    label={'Password'}
                    name={'password'}
                    focusOnMount={true}
                    onChange={setPassword}
                    containerClassName={styles['input']}
                />
                <Button className={styles['button']} onClick={isLogin ? login : create}>
                    {title}
                </Button>
                <span onClick={swap} className={styles['footer']}>
                    {footer}
                </span>
            </div>
        </div>
    )
}