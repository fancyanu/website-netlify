import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import { useNavigate } from 'react-router-dom';


import MyProfile from './MyProfile';

const useStyles = makeStyles({
  section: {
    fontSize: '2rem',
    color: 'black',
    textAlign: 'left',
  },
});

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    window.location.href = '/';
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

const Home = () => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Anuhya',
    age: 19,
    contactNumber: '1234567891',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className={classes.section}>
        <h2>Profile Page</h2>
        <button onClick={handleEdit}>
          <EditIcon className={classes.icon} />
          Edit
        </button>
      </section>
      <section>
        <h3>Followers & Following</h3>
        <MyProfile />
      </section>
      <section>
        <h3>Details</h3>
        {isEditing ? (
          <form onSubmit={handleSave}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={user.age}
                onChange={handleChange}
              />
            </label>
            <label>
              Contact Number:
              <input
                type="text"
                name="contactNumber"
                value={user.contactNumber}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Contact Number: {user.contactNumber}</h4>
          </div>
        )}
      </section>
      <section>
        <LogoutButton />
      </section>
    </div>
    

  );
};

export default Home;