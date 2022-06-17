import { useLazyQuery, useMutation } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CREATE_USER } from '../../graphql/mutations';
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
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { type='login', redirect_uri='/' } = router.query as QueryParams;
    const isLogin = type === 'login';

    const [_login] = useLazyQuery(LOGIN);
    const [_create] = useMutation(CREATE_USER);

    // When input changes, remove feedback
    useEffect(() => setFeedback(''), [password, username, isLogin]);

    const emptyFields = () => {
        setFeedback('Fields are empty.');
    }
    const login = async () => {
        // Returning if username or password is empty
        if(!username || !password) return emptyFields();
        
        // Updating loading state
        setLoading(true);

        // Making request to login
        const { data, error } = await  _login({ variables: {
            username,
            password
        } });

        // If there were errors with login
        if(error) {
            setFeedback(error.message);
            setLoading(false);
            return
        }

        // Setting token in localStorage
        window.localStorage.token = data.login.token;
        window.location.href = redirect_uri;
    }
    const create = async () => {
        // Returning if username or password is empty
        if(!username || !password) return emptyFields();

        // Updating loading state
        setLoading(true);

        // Making request to create user
        try {
            await _create({ variables: {
                username,
                password
            } })
        } catch(error: any) {
            setFeedback(error.message);
            setLoading(false);
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

    const swap = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const newType = isLogin ? 'create' : 'login';
        let path = `/login?type=${newType}`;
        if(redirect_uri) {
            path += `&redirect_uri=${redirect_uri}`;
        }

        router.push(path);
    }

    const title = isLogin ? (
        'Login to Your Account'
    ) : (
        'Create Your Account'
    )
    const footer = isLogin ? (
        'Don\'t have an account?'
    ) : (
        'Already have an account?'
    )
    const isValid = username && password;
    return(
        <>
        <Head>
            <title>
                Login - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </title>
            <meta name="og:title" content={`Login - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`} />
            <meta name="description" content={`Login to save the scores you achieve.`} />
            <meta name="og:description" content={`Login to save the scores you achieve.`} />
        </Head>

        <div className={styles['container']}>
            <div className={styles['content']}>
                <h1>
                    {title}
                </h1>
                <Input 
                    label={'Username'}
                    name={'username'}
                    focusOnMount={true}
                    onChange={setUsername}
                    containerClassName={styles['input']}
                />
                <Input 
                    label={'Password'}
                    name={'password'}
                    onChange={setPassword}
                    containerClassName={styles['input']}
                    type={'password'}
                />
                {feedback && (
                    <span className={styles['feedback']}>
                        {feedback}
                    </span>
                )}
                <Button 
                    className={styles['button']} 
                    onClick={isLogin ? login : create}
                    disabled={!!feedback || !isValid}
                    loading={loading}
                >
                    {title}
                </Button>
                <div className={styles['footer']}>
                    <a onClick={swap} href={'#'}>
                        {footer}
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}