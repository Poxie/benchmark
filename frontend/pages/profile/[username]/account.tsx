import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Account as AccountPage } from '../../../components/profile/account/Account';
import { GET_PROFILE_BY_USERNAME } from '../../../graphql/queries';
import { ProfileLayout } from '../../../layouts/ProfileLayout';
import { setProfile } from '../../../redux/profile/actions';
import { selectProfileIsLoading, selectProfileIsMe } from '../../../redux/profile/selectors';
import { RootState, useAppSelector, wrapper } from '../../../redux/store';
import { selectUserIsLoading } from '../../../redux/user/selectors';
import { client } from '../../_app';

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
const Account = () => {
    const meIsLoading = useAppSelector(selectUserIsLoading);
    const profileIsLoading = useAppSelector(selectProfileIsLoading);
    const isMe = useAppSelector(selectProfileIsMe);

    // Checking whether user is authorized to view
    if(meIsLoading || profileIsLoading) return null;
    if(!isMe) {
        return(
            <div>
                Unauthorized.
            </div>
        )
    }

    return <AccountPage />;
}
Account.getLayout = (page: ReactElement) => {
    return(
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}

export default connect((state: RootState) => state)(Account);