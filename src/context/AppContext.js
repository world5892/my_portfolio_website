import { createContext, useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const AppContext = createContext();

function AppProvider(props) {
  const [allProjects, setAllProjects] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsRef = collection(db, 'listings');

        const q = query(projectsRef);

        const querySnap = await getDocs(q);

        const projects = [];

        querySnap.forEach((doc) => projects.push(doc.data()));

        setAllProjects(projects);
        setLoadingError(false);
      } catch (err) {
        setLoadingError(true);

        toast.error('Could not get the projects', {
          toastId: 'custom-id-yes',
        });
      }
    };

    getProjects();
  }, []);

  const value = {
    allProjects,
    loadingError,
    windowWidth,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
