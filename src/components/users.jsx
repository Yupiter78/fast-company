import React, {useState} from 'react';
import api from "../api";

const Users = () => {

    const [users, setUsers] = useState(api.users.fetchAll());

    const headerTableTemplate = () => {
        return (
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th></th>
            </tr>
        );
    }

    const bodyTableTemplate = (arrayOfUsers) => {
        return arrayOfUsers.map(user => {
            return (
                <tr key={user._id}>
                    <th scope="row">{user.name}</th>
                    <td>{user.qualities.map((quality) => (
                        <span key={quality._id} className={`badge me-2 bg-${quality.color}`}>
                          {quality.name}
                        </span>))}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{`${user.rate}/5`}</td>
                    <td>
                        <button onClick={() => handleToggleBookMark(user._id)}
                                className={getIconClasses(user.status = false)}> </button>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });
    }

    const getBadgeClasses = () => {
        let classes = 'badge bg-';
        classes += users.length === 0 ? 'danger' : 'primary';
        return classes;
    }

    function handleDelete(userId) {
        setUsers(users.filter(user => userId !== user._id));
    }

    const getIconClasses = (userStatus) => {
        console.log('userStatus:', userStatus);
        console.log('users:', users);
        let classes = 'btn-sm bi bi-bookmark'
        if (userStatus) {
            classes += '-fill';
        }
        return classes;
    }
    const handleToggleBookMark = (userId) => {
        /*const newUsers = users.map(user => {
            if (user._id === userId) {
                console.log('user.status__1:', user.status);
                user.status = !user.status;
                console.log('user.status__2:', user.status);
                console.log('user:', user);
            }
            return user;
        });
        setUsers(newUsers);*/
        const newUsers = [...users];
        const index = newUsers.findIndex((user) => user._id === userId);
        newUsers[index].status = !newUsers[index].status;
        console.log('newUsers:', newUsers);
        setUsers(newUsers);
    };

    const renderPhrase = (number) => {
        const exceptions = ['2', '3', '4'];
        return exceptions.includes(number.toString().substr(-1, 1)) && number.toString().substr(-2, 1) !== '1' ?
            'человека тусанут' : 'человек тусанёт';
    }

    const getHeaderText = () => {
        return users.length === 0 ? 'Никто с тобой не тусанёт' : `${users.length}  ${renderPhrase(users.length)} с тобой сегодня`;
    }

    return (
        <>
            <h2>
                <span className={getBadgeClasses()}>{getHeaderText()}</span>
            </h2>
            <table className="table">
                <thead>
                {headerTableTemplate()}
                </thead>
                <tbody>
                {bodyTableTemplate(users)}
                </tbody>
            </table>
        </>
    );
};

export default Users;