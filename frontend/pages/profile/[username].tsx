import React, { useEffect } from 'react';
import { client } from '../_app';
import { GetServerSidePropsContext } from 'next';
import { Profile } from '../../components/profile/Profile';
import { GET_PROFILE_BY_USERNAME } from '../../graphql/queries';
import { Profile as ProfileType } from '../../redux/profile/types';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/profile/actions';

export default function profile({ profile }: {profile: ProfileType}) {
    const dispatch = useDispatch();
    
    // On mount, set user profile in redux
    useEffect(() => {
        dispatch(setProfile(profile));
    }, [profile.user.id]);

    return <Profile />;
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
    const { username } = query;

    // Fetching user overview
    const { data } = await client.query({
        query: GET_PROFILE_BY_USERNAME,
        variables: {
            username
        }
    })
    const profile = data?.getProfileOverview;

    // If user not found
    if(!profile) return {
        notFound: true
    }
    
    return {
        props: {
            profile
        }
    }
}