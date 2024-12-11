import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Voting Dapp home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/voter/register">Voter Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/candidate/register">Candidate Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/voter/getVoterList">Voter List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/candidate/getCandidateList">Candidate List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/electionCommission">Election Commission</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;