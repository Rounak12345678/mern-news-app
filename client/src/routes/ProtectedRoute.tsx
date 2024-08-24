import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: JSX.Element|JSX.Element[];
}
const ProtectedRoute = ({ children }:ProtectedRouteProps) => {
	const userDetails = true 
    
	return !userDetails
		? <Navigate to ="/dashboard" />
		: children
  };
 
export default ProtectedRoute;