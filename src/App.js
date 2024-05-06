import "./App.css";
import Dashboard from "./components/admin/dashboard/dashboard";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reports from "./components/admin/reports/reports";
import AdminContact from "./components/admin/contact/contact";
import Subscription from "./components/admin/subscription/subscription";
import Settings from "./components/admin/settings/settings";
import Account from "./components/admin/account/account";
import PrivateRoute from "./Routes/PrivateRoute";
import PageNotFound from "./pages/notfound/PageNotFound";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/terms/TermsOfUse";
import EmailVerification from "./pages/verifyEmail/VerifyEmail";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import PaymentCancel from "./components/payment/PaymentCancel";
import ContactPage from "./pages/contact/ContactPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/verify-email/:token" element={<EmailVerification />} />
				<Route path="/privacy_policy" element={<PrivacyPolicy />} />
				<Route path="/terms_of_use" element={<TermsOfUse />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/" element={<PrivateRoute />}>
					<Route path="stripe/success" element={<PaymentSuccess />} />
					<Route path="stripe/cancel" element={<PaymentCancel />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/admin-contact" element={<AdminContact />} />
					<Route path="/subscription" element={<Subscription />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/account" element={<Account />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
