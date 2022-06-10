import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { ProfileGameStats } from '../../../components/profile/game-stats/ProfileGameStats';
import { GET_PROFILE_BY_USERNAME, GET_PROFILE_GAME_STATS } from '../../../graphql/queries';
import { ProfileLayout } from '../../../layouts/ProfileLayout';
import { setProfile, setProfileGameStats } from '../../../redux/profile/actions';
import { selectProfileGameStats } from '../../../redux/profile/selectors';
import { RootState, useAppSelector, wrapper } from '../../../redux/store';
import { client } from '../../_app';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    const { username, gameId } = query;

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

    // Fetching game specific stats
    const { data: statsData } = await client.query({
        query: GET_PROFILE_GAME_STATS,
        variables: {
            userId: profile.user.id,
            gameId,
        }
    })
    const stats = statsData?.getProfileGameStats;

    // If stats not found
    if(!stats) return {props: {}};
    
    // Updating redux store
    store.dispatch(setProfile(profile));
    store.dispatch(setProfileGameStats(stats));

    return {
        props: { gameId }
    }
});

const GameInfo: React.FC<{
    gameId: string
}> & {getLayout: any} = ({ gameId }) => {
    return <ProfileGameStats gameId={gameId} />
}
GameInfo.getLayout = (page: ReactElement) => {
    return(
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}

export default connect((state: RootState) => state)(GameInfo);