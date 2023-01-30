import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black',
    padding: '10px',
  },
  icon: {
    marginRight: '10px',
  },
  section: {
    fontSize: '2rem',
    color: 'black',
    textAlign: 'center',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <Link to="/home" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link to="/mySubGreddiits" className={classes.link}>
        <AboutIcon className={classes.icon} />
        My Sub Greddiits Page
      </Link>
      <Link to="/SubGreddiitPage" className={classes.link}>
        <AboutIcon className={classes.icon} />
        Sub Greddiit Page
      </Link>
    </nav>
  );
};

const Home = () => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    contactNumber: '555-555-5555',
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
      <Navbar />
      <section className={classes.section}>
        <h2>Profile Page</h2>
        <button onClick={handleEdit}>
          <EditIcon className={classes.icon} />
          Edit
        </button>
      </section>
      <section>
        <h3>Followers</h3>
        <h3>Following</h3>
      </section>
      <section>
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
    </div>
  );
};

export default Home;