import React, { ReactElement, useEffect } from 'react';
import { client } from '../../_app';
import { GetServerSidePropsContext } from 'next';
import { GET_PROFILE_BY_USERNAME } from '../../../graphql/queries';
import { Profile } from '../../../redux/profile/types';
import { connect, useDispatch } from 'react-redux';
import { setProfile } from '../../../redux/profile/actions';
import { ProfileLayout } from '../../../layouts/ProfileLayout';
import { ProfileOverview } from '../../../components/profile/overview/ProfileOverview';
import { RootState, wrapper } from '../../../redux/store';

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

const profile = () => {
    return <ProfileOverview />;
}
profile.getLayout = (page: ReactElement) => {
    return(
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}

export default connect((state: RootState) => state)(profile);