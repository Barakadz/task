import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillProject, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrValidate } from "react-icons/gr";
import { TiNews } from "react-icons/ti";

const Side = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.mail === '') {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <>
      <div id="sidebar">
        <header>
          <a href="#">Task Manager ver <b>1.0.0</b></a>
        </header>
        <ul className="nav">
        <Link legacyBehavior href="/admin">
            <li className={router.pathname === '/admin' ? 'act ' : ''}>
              <div className="flex flex-row">
                <GrValidate color="white" fontSize={20} className="mr-4" />
                &nbsp; &nbsp;utilisateurs
              </div>
            </li>
          </Link>
          <Link legacyBehavior href="/admin">
            <li className={router.pathname === '/admin' ? 'act ' : ''}>
              <div className="flex flex-row">
                <AiOutlineFundProjectionScreen color="white" fontSize={20} className="mr-4" />
                &nbsp; &nbsp;Dashboard
              </div>
            </li>
          </Link>
          <Link legacyBehavior href="/projet">
            <li className={router.pathname === '/projet' ? 'act projet-step' : 'projet-step'}>
              <div className="flex flex-row">
                <AiFillProject color="white" fontSize={20} className="mr-4 projet-step" />
                &nbsp; &nbsp;Les Projets
              </div>
            </li>
          </Link>
          <Link legacyBehavior href="/tache">
            <li className={router.pathname === '/tache' ? 'act ' : ''}>
              <div className="flex flex-row">
                <TiNews color="white" fontSize={20} className="mr-4" />
                &nbsp; &nbsp;Les Taches
              </div>
            </li>
          </Link>
          <Link legacyBehavior href="/admin">
            <li className={router.pathname === '/admin' ? 'act ' : ''}>
              <div className="flex flex-row">
                <GrValidate color="white" fontSize={20} className="mr-4" />
                &nbsp; &nbsp;Réclamation
              </div>
            </li>
          </Link>
          
          <Link legacyBehavior href="/evaluation">
            <li className={router.pathname === '/evaluation' ? 'act evaluation-step' : 'evaluation-step'}>
              <div className="flex flex-row">
                <GrValidate color="white" fontSize={20} className="mr-4" />
                &nbsp; &nbsp;Evaluation
              </div>
            </li>
          </Link>
          <Link legacyBehavior href="/contact">
            <li className={router.pathname === '/contact' ? 'act ' : ''}>
              <div className="flex flex-row">
                <GrValidate color="white" fontSize={20} className="mr-4" />
                &nbsp; &nbsp;Contact Direction des systèmes d'information pour résoudre un problème
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div id=" ">
        <nav className="">
          <div className="container-fluid">
            <div className="topbarrr">
              <div><img src="logo.png" width={50} alt="Logo" /></div>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <FaRegUserCircle size={33} color="blue" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <strong>{user.firstName + ' ' + user.lastName}</strong>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Side;
