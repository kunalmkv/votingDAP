import { createBrowserRouter } from "react-router-dom";
import GetVoterList from "../pages/Voter/GetVoterList.jsx";
import RegisterVoter from "../pages/Voter/RegisterVoter.jsx";
import GetCandidateList from "../pages/Candidate/GetCandidateList.jsx";
import RegisterCandidate from "../pages/Candidate/RegisterCandidate.jsx";
import ElectionCommission from "../pages/ElectionCommission/ElectionCommission.jsx";
import Wallet from "../components/Wallet/Wallet.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
const Routes = createBrowserRouter([
    {path: "/", element: (
        <div>
            <Wallet />
        </div>)},
    { path: "/voter/register", element: (
        <div>
            <Navigation />
            <RegisterVoter />
        </div>
        ) },
    { path: "/candidate/register", element: (
        <div>
            <Navigation />
            <RegisterCandidate />
        </div>
        )},
    { path: "/voter/getVoterList", element: (
        <div>
            <Navigation />
            <GetVoterList />
        </div>
        ) },
    { path: "/candidate/getCandidateList", element: (
        <div>
            <Navigation />
            <GetCandidateList />
        </div>
        ) },
    { path: "/electionCommission", element: (
        <div>
            <Navigation />
            <ElectionCommission />
        </div>
        ) },
]);

export default Routes;
