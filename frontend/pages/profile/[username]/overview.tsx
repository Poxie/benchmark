import React, { ReactElement, useEffect } from 'react';
import { client } from '../../_app';
import { GetServerSidePropsContext } from 'next';
import { GET_PROFILE_BY_USERNAME } from '../../../graphql/queries';
import { Profile } from '../../../redux/profile/types';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../../redux/profile/actions';
import { ProfileLayout } from '../../../layouts/ProfileLayout';
import { ProfileOverview } from '../../../components/profile/overview/ProfileOverview';
import { wrapper } from '../../../redux/store';

export default function profile({ profile }: {profile: Profile}) {
    const dispatch = useDispatch();
    
    // On mount, set user profile in redux
    dispatch(setProfile(profile));

    return <ProfileOverview />;
}
profile.getLayout = (page: ReactElement) => {
    return(
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
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
    
    // Updating redux store
    store.dispatch(setProfile(profile));

    return {
        props: {
            profile
        }
    }
});