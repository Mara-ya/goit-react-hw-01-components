import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import { Friends } from './FriendList.styled'


export const FriendList = ({ friends }) => {
    return (<Friends>
        {friends.map(({id, isOnline, avatar, name}) => (
            <FriendListItem key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}>
            </FriendListItem>
        )
        )}
    </Friends>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.oneOf([true, false]).isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    )
};