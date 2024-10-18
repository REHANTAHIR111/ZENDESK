import { lazy } from 'react';

// Zendesk
const Home = lazy(() => import('../pages/Zendesk/Home'));
const Visitors = lazy(() => import('../pages/Zendesk/Visitors'));
const History = lazy(() => import('../pages/Zendesk/History'));
const ZendexAnalytics = lazy(() => import('../pages/Zendesk/Zendesk-analytics'));
const Monitor = lazy(() => import('../pages/Zendesk/Monitor'));
const Agents = lazy(() => import('../pages/Zendesk/Agents'));
const Departments = lazy(() => import('../pages/Zendesk/Departments'));
const ZendexRoles = lazy(() => import('../pages/Zendesk/Zendesk-Roles'));
const Routing = lazy(() => import('../pages/Zendesk/Routing'));
const Shortcuts = lazy(() => import('../pages/Zendesk/Shortcuts'));
const Banned = lazy(() => import('../pages/Zendesk/Banned'));
const Triggers = lazy(() => import('../pages/Zendesk/Triggers'));
const Goals = lazy(() => import('../pages/Zendesk/Goals'));
const Widget = lazy(() => import('../pages/Zendesk/Widget'));
const Personal = lazy(() => import('../pages/Zendesk/Personal'));
const Account = lazy(() => import('../pages/Zendesk/Account'));
const AddDepartment = lazy(() => import('../pages/Zendesk/addDepartment'));
const AddShortcut = lazy(() => import('../pages/Zendesk/addShortcut'));
const EditShortcut = lazy(() => import('../pages/Zendesk/editShortcut'));
const AddVisitor = lazy(() => import('../pages/Zendesk/addVisitor'));
const AddTrigger = lazy(() => import('../pages/Zendesk/addTrigger'));
const EditTrigger = lazy(() => import('../pages/Zendesk/editTrigger'));

const SignIn = lazy(() => import("../pages/admin/SignIn"));


const routes = [

    {
        path: "/admin/signin",
        element: <SignIn />,
        layout: "blank",
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/zendesk/visitors',
        element: <Visitors />,
    },
    {
        path: '/zendesk/history',
        element: <History />,
    },
    {
        path: '/zendesk/zendesk-analytics',
        element: <ZendexAnalytics />,
    },
    {
        path: '/zendesk/monitor',
        element: <Monitor />,
    },
    {
        path: '/zendesk/agents',
        element: <Agents />,
    },
    {
        path: '/zendesk/departments',
        element: <Departments />,
    },
    {
        path: '/zendesk/zendesk-roles',
        element: <ZendexRoles />,
    },
    {
        path: '/zendesk/routing',
        element: <Routing />,
    },
    {
        path: '/zendesk/shortcuts',
        element: <Shortcuts />,
    },
    {
        path: '/zendesk/banned',
        element: <Banned />,
    },
    {
        path: '/zendesk/triggers',
        element: <Triggers />,
    },
    {
        path: '/zendesk/goals',
        element: <Goals />,
    },
    {
        path: '/zendesk/widget',
        element: <Widget />,
    },
    {
        path: '/zendesk/personal',
        element: <Personal />,
    },
    {
        path: '/zendesk/account',
        element: <Account />,
    },
    {
        path: '/zendesk/department/add-departments',
        element: <AddDepartment/>,
    },
    {
        path: '/zendesk/shortcuts/addshortcut',
        element: <AddShortcut/>,
    },
    {
        path: '/zendesk/shortcuts/editshortcut',
        element: <EditShortcut/>,
    },
    {
        path: '/zendesk/banned/addvisitor',
        element: <AddVisitor/>,
    },
    {
        path: '/zendesk/trigger/addtrigger',
        element: <AddTrigger/>,
    },
    {
        path: '/zendesk/trigger/edittrigger',
        element: <EditTrigger/>,
    },
];

export { routes };
