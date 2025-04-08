import { Admin, Resource, CustomRoutes, AuthProvider } from 'react-admin';
import { BrowserRouter, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
    CreateGuesser,
    EditGuesser,
    ForgotPasswordPage,
    ListGuesser,
    LoginPage,
    SetPasswordPage,
    ShowGuesser,
    defaultI18nProvider,
    supabaseDataProvider,
    supabaseAuthProvider
} from 'ra-supabase';

const instanceUrl =import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const apiKey =import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
const supabaseClient = createClient(instanceUrl, apiKey);
const dataProvider = supabaseDataProvider({ instanceUrl, apiKey, supabaseClient });
const authProvider: AuthProvider = supabaseAuthProvider(supabaseClient, {});

export const App = () => (
    <BrowserRouter>
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={defaultI18nProvider}
            loginPage={LoginPage}
            requireAuth
            disableTelemetry
        >
            <Resource name="interview_questions" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="test_results" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="questions" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="profiles" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="interview_feedback" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="questions_test" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="answers" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="interviews" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <Resource name="courses" list={ListGuesser} edit={EditGuesser} create={CreateGuesser} show={ShowGuesser} />
            <CustomRoutes noLayout>
                <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
                <Route path={ForgotPasswordPage.path} element={<ForgotPasswordPage />} />
            </CustomRoutes>
        </Admin>
    </BrowserRouter>
);

export default App;